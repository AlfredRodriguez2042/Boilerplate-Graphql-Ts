import { makeExecutableSchema } from 'graphql-tools'

import { GraphQLSchema } from 'graphql'
import resolvers from './resolvers'
import typeDefs from './types'

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
