import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'
import { data, userIdProvider, postIdProvider } from './data'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    data, 
    userIdProvider, 
    postIdProvider
  }
} as any)

server.start(() => console.log('Server is running on http://localhost:4000'))