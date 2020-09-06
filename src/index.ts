import { createServer } from 'http'
import 'reflect-metadata'
import { App, server } from './server'
import { createTypeormConn } from './db'

const PORT = process.env.PORT || 4000
const httpServer = createServer(App)
async function main() {
  try {
    await createTypeormConn()
    httpServer.listen(PORT, (): void => {
      console.log(
        `>>>  🚀   Server ready at http://localhost:${PORT}${server.graphqlPath}`
      )
    })
  } catch (error) {
    console.log(error)
  }
}
main()
