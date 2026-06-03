import cors from "cors";
import express from "express";
import { videoQueue, env } from "@empire/redis-core";

const app = express();
app.use(express.json());
app.use(cors());

// 1. The Producer Endpoint
app.post("/api/videos/upload", async (req, res) => {
  console.log(`[API] 📥 Received video upload.`);

  // Push to BullMQ instantly
  const job = await videoQueue.add("compress-video", {
    videoName: "raw_footage.mov",
  });

  res.status(202).json({
    message: "Upload accepted. Processing in background.",
    jobId: job.id,
  });
});

// 2. The Polling Endpoint
app.get("/api/videos/status/:jobId", async (req, res) => {
  const { jobId } = req.params;
  const job = await videoQueue.getJob(jobId);

  if (!job) return res.status(404).json({ error: "Job not found" });

  const state = await job.getState();
  const progress = job.progress;

  if (state === "completed") {
    return res
      .status(200)
      .json({ status: "COMPLETED", result: job.returnvalue });
  }

  if (state === "failed") {
    return res.status(500).json({ status: "FAILED", reason: job.failedReason });
  }

  res.status(200).json({ status: state.toUpperCase(), progress });
});

const PORT = env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`🚀 Video API running on http://localhost:${PORT}`);
});
