import { GraphQLServer } from "graphql-yoga";
import axios from "axios";

const server = new GraphQLServer({
  // for the return null is allowable use excalamation(!) to not acept null
  typeDefs: `
    type Query {
      agent(id: ID!): User!,
      agents: [User!]!
      multiply(value: Int!): Int!
      msg(value:[String!]!): String
      posts: [Post!]!
      post(id: ID!): Post!
    }

    type User {
      id: ID!
      name: String!
      age: Int!
      married: Boolean
      average: Float
      posts: [Post!]!
    }

    type Post {
      id: ID!
      title: String!
      content: String!
      author: User!
    }
  `,
  resolvers: {
    Query: {
      agent: async (parent, args) => {
        const response = await axios.get(
          `http://localhost:3004/users/${args.id}`
        );
        return response.data;
      },
      agents: async () => {
        const response = await axios.get("http://localhost:3004/users");
        return response.data;
      },
      multiply: (parent, args, context, info) => {
        const val = args.value * 10;
        return val;
      },
      msg: (parent, args) => {
        if (args.value.length) {
          return `Hello ${args.value[0]} ${args.value[1]}`;
        }
        return `Sorry, no values`;
      },
      posts: async () => {
        const response = await axios.get(`http://localhost:3004/posts`);
        return response.data;
      },
      post: async (parent, args) => {
        const response = await axios.get(
          `http://localhost:3004/posts/${args.id}`
        );
        return response.data;
      },
    },
    Post: {
      author: async (parent) => {
        const response = await axios.get(
          `http://localhost:3004/users/${parent.author}`
        );
        return response.data;
      },
    },
    User: {
      posts: async (parent) => {
        const response = await axios.get(
          `http://localhost:3004/posts?author=${parent.id}`
        );
        return response.data;
      },
    },
  },
});

server.start(() => {
  console.log("And running running!");
});
