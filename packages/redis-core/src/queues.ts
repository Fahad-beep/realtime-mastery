import { Queue } from "bullmq";
import { redisConnection } from "./connection.js";

export const VIDEO_QUEUE_NAME = "video-processing-name";

export const videoQueue = new Queue(VIDEO_QUEUE_NAME, {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: "exponential", delay: 1000 },
    removeOnComplete: false,
    removeOnFail: false,
  },
});
