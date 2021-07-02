import { GraphQLServer } from "graphql-yoga";

const server = new GraphQLServer({
  // for the return null is allowable use excalamation(!) to not acept null
  typeDefs: `
    type Query {
      agent: User!
    }

    type User {
      id: ID!
      name: String!
      age: Int!
      married: Boolean
      average: Float
    }
  `,
  resolvers: {
    Query: {
      agent() {
        return {
          id: 1,
          name: "Aravind",
          age: 15,
          married: null,
          average: 1.5,
        };
      }
    },
  },
});

server.start(() => {
  console.log("And running running!");
});
