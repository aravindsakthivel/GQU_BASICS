import { GraphQLServer } from "graphql-yoga";
import { Picture } from "./graphql/resolvers/Picture.js";
import { Post } from "./graphql/resolvers/Post";
import { Query } from "./graphql/resolvers/Query";
import { User } from "./graphql/resolvers/User";
import { Mutation } from "./graphql/resolvers/Muatations";

const server = new GraphQLServer({
  typeDefs: "./src/graphql/schema.graphql",
  resolvers: {
    Query,
    Picture,
    Post,
    User,
    Mutation,
  },
});

server.start(() => {
  console.log("And running running!");
});
