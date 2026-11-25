import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

import {
  defineCmsCollection,
  defineCmsFileCollection,
  getCmsCollection,
} from '@sourcepoetry/astro-sveltia/content'
import { cmsConfig } from './cms/config'

const artworks = defineCmsCollection(getCmsCollection(cmsConfig, 'artworks'))
const services = defineCmsCollection(getCmsCollection(cmsConfig, 'services'))
const biography = defineCmsFileCollection(
  getCmsCollection(cmsConfig, 'biography'),
)

export const collections = { artworks, services, biography }
