'use server'

import { revalidatePath } from 'next/cache';
import { kv } from '@vercel/kv';
import { nanoid } from 'nanoid'
import { z } from 'zod'

const schema = z.object({
  longUrl: z.string().url({ message: 'Invalid url' }),
  alias: z.optional(z.string().max(30, { message: 'Alias must not be greater than 30 characters' }).regex(new RegExp(/^[.~a-zA-Z0-9_-]*$/), { message: 'Alias must contain url safe characters' }))
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
    const longUrl = formData.get('longUrl')?.toString()
    if (longUrl) {
      const shortLink = alias ? alias.toString() : nanoid(11);

      await kv.hset('links', { [shortLink]: longUrl })
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

export async function deleteLink(linkKey: string) {
  try {
    await kv.hdel('links', linkKey)
  } catch (e) {
    console.log(e)
    throw new Error('Failed to delete link')
  }
}

export async function getAllLinks() {
  const links = await kv.hgetall('links')
  const linksObject = JSON.parse(JSON.stringify(links))
  const linksArray: [string, string][] = Object.entries(linksObject);

  return linksArray;
}