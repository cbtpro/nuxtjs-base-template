/**
 * @see https://content.nuxt.com/docs/getting-started/configuration
 */
import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
});