import "reflect-metadata";
import express from "express";
import http from "http";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { db } from "./db";
import schemaPromise from "./schema";

// Charger les variables d'environnement à partir du fichier .env
import dotenv from "dotenv";
dotenv.config();

const port = process.env.SERVER_PORT || 4000;
const allowedOrigins =
  process.env.CORS_ALLOWED_ORIGINS || "http://localhost:5173";

// Vérifier les variables d'environnement
console.log(`CORS_ALLOWED_ORIGINS: ${allowedOrigins}`);

schemaPromise.then(async (schema) => {
  await db.initialize();
  const app = express();
  const httpServer = http.createServer(app);
  const plugins = [ApolloServerPluginDrainHttpServer({ httpServer })];
  const server = new ApolloServer({ schema, plugins });
  await server.start();

  const corsConfig = {
    origin: allowedOrigins.split(","),
    credentials: true,
  };

  console.log("CORS config:", corsConfig); // Vérifier la configuration CORS

  // Appliquer la configuration CORS à ton application Express
  app.use(cors(corsConfig));

  const context = async ({ req, res }: any) => ({ req, res });
  const expressMW = expressMiddleware(server, { context });
  app.use(express.json(), expressMW);

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
});
