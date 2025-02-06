'use client'

/**
<<<<<<< HEAD
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
=======
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
>>>>>>> e9f6b11 (Update Files)
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
<<<<<<< HEAD
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
=======
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
>>>>>>> e9f6b11 (Update Files)

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
