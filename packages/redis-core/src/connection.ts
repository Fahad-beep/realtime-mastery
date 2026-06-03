import { Redis } from "ioredis";
import { env } from "./env.js";

export const redisConnection = new Redis(env.REDIS_URL, {
  maxRetriesPerRequest: null,
});

redisConnection.on("error", (error: any) =>
  console.error("Redis Error: ", error),
);
redisConnection.on("connect", () => console.log("Redis Connected to core"));
