import express from "express";
import { generateMetaResponse } from "@empire/shared";

const app = express();

app.get("/", (req, res) => {
  const metadata = generateMetaResponse("Notification Service Active");
  res.json({
    service: "notification-api",
    metadata,
  });
});

app.listen(4002, () => {
  console.log("🎧 Notification Service running on http://localhost:3002");
});
