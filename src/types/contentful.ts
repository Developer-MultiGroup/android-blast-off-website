import { EntrySkeletonType } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface BlogPostFields {
  title: string;
  slug: string;
  description: string;
  writers: string[];
  body: Document;
}

// ✅ This satisfies Contentful’s constraint
export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'dmgBlog'>;
