import express from "express";
import { generateMetaResponse } from "@empire/shared";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  const data = generateMetaResponse("data fetched");
  res.json({
    data,
    service: "order-service",
  });
});

app.listen(4001, () => {
  console.log("order-service listening on port 4001");
});
