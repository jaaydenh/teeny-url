'use server'

import { revalidatePath } from 'next/cache';
import { kv } from '@vercel/kv';
import { nanoid } from 'nanoid'
import { z } from 'zod'

const schema = z.object({
  longUrl: z.string().url({ message: 'Invalid url' }),
  // alias: z
  //   .union([z.string().length(0), z.string().min(5), z.string().max(30)])
  //   .optional()
  //   .transform(e => e === "" ? undefined : e)
  alias: z.optional(z.string().max(30, { message: 'Alias must not be greater than 30 characters' }).regex(new RegExp(/^[.~a-zA-Z0-9_-]*$/), { message: 'Alias must contain url safe characters' }))
  // .min(5, { message: 'Alias must be a minimum of 5 characters' })
})

export async function createLink(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    longUrl: formData.get('longUrl'),
    alias: formData.get('alias')
  })

  if (!validatedFields.success) {
    console.log(validatedFields.error.issues)
    const message = validatedFields.error.issues.map((issue, index) => (index > 0 ? ', ' : '') + issue.message)
    return {
      message: message,
      shortLink: ''
    }
  }

  const alias = formData.get('alias')
  if (alias) {
    const shortendUrl = await kv.get(alias.toString()) as string;
    if (shortendUrl) {
      return {
        message: "Alias is not available"
      }
    }
  }

  try {
    const longUrl = formData.get('longUrl')
    if (longUrl) {
      const shortLink = alias ? alias.toString() : nanoid(11);
      await kv.set(shortLink, longUrl.toString());
      console.log('shortLink: ' + shortLink)
      return {
        message: '',
        shortLink
      }
    }
  } catch (e) {
    console.log(e)
    throw new Error('Failed to create shortened link')
  }

  revalidatePath('/')
}