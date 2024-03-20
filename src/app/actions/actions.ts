'use server'

import { revalidatePath } from 'next/cache';
import { kv } from '@vercel/kv';
import { nanoid } from 'nanoid'
import { z } from 'zod'

const schema = z.object({
  longUrl: z.string().url({ message: "Invalid url" })
})

export async function createLink(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    longUrl: formData.get('longUrl'),
  })

  if (!validatedFields.success) {
    return {
      message: "Invalid Url",
      shortLink: ''
    }
  }

  try {
    const longUrl = formData.get('longUrl')
    if (longUrl) {
      const shortLink = nanoid(11);
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