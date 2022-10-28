import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./typeDefs/index";
import resolvers from "./resolvers/index";

dotenv.config();

const PORT = process.env.PORT || 4000;

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });
  apolloServer.applyMiddleware({ app: app });

  app.get("/", (req, res) => {
    res.send("API is up and running!");
  });

  await mongoose.connect(process.env.DATABASE_URL as string);

  console.log("Connected to MongoDB");

  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}

startServer();
