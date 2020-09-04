import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import 'reflect-metadata'
import { schema } from './Graphql/index'

const app = express()
const path = '/graphql'
const cors = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:5000'],
}
export const server = new ApolloServer({
  schema,
  tracing: process.env.NODE_ENV === 'development',
  introspection: process.env.NODE_ENV === 'development',
})

server.applyMiddleware({ app, path, cors })

export const App = app
