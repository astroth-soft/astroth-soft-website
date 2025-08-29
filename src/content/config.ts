import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    tag: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
};