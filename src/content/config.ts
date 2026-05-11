import { z, defineCollection } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

const studiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(155),
    client: z.string().optional(),
    pubDate: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
    results: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'articulos': articlesCollection,
  'estudios': studiesCollection,
};
