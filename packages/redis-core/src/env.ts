import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  REDIS_URL: z.string().default("redis://host.docker.internal:6379"),
});

const _envData = envSchema.safeParse(process.env);

if (!_envData.data) {
  console.error("Failed to parse env in redis-core: ", _envData.error.format());
  process.exit(1);
}

export const env = _envData.data;
