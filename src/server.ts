import { ApolloServer } from 'apollo-server-express'
import cookierParser from 'cookie-parser'
import express from 'express'
import { schema } from './Graphql/index'

const app = express()
const path = '/graphql'
const cors = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:5000'],
}
app.use(cookierParser())

const context: any = async ({ req, res }: any) => {
  return { req, res }
}
export const server = new ApolloServer({
  schema,
  tracing: process.env.NODE_ENV === 'development',
  introspection: process.env.NODE_ENV === 'development',
  context,
})

server.applyMiddleware({ app, path, cors })

export const App = app
