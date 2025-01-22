// schemas/blogPost.ts
import { Rule } from '@sanity/types';

export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().min(20).max(500),
    },
    {
      name: 'commentsCount',
      title: 'Comments Count',
      type: 'number',
      initialValue: 0,
      validation: (Rule: Rule) => Rule.min(0),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
