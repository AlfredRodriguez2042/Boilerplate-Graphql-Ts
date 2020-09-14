import { ApolloServer } from 'apollo-server-express'
import cookierParser from 'cookie-parser'
import express from 'express'
import depthLimit from 'graphql-depth-limit'
import { schema } from './Graphql'

const app = express()
const path = '/graphql'
const cors = {
  credentials: true,
  origin: ['http://localhost:3000', 'http://localhost:5000'],
}
app.use(cookierParser())

export const server = new ApolloServer({
  schema,
  tracing: true,
  introspection: true,
  context: ({ req, res }) => ({
    req,
    res,
  }),
  validationRules: [depthLimit(5)],
})

server.applyMiddleware({ app, path, cors })

export const App = app
