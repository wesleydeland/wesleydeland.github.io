import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.date(),
    draft: z.boolean().default(false),
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { posts };