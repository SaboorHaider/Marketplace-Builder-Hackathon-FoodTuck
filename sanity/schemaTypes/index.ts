import { type SchemaTypeDefinition } from 'sanity'
import chefs from './chefs'
import foods from './foods'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefs, foods , blog],
}
