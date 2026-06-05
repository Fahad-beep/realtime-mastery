import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import path from "path";

export type { ProtoGrpcType } from "./generated/notification.js";
export type { EmailRequest } from "./generated/notification/EmailRequest.js";
export type { EmailResponse } from "./generated/notification/EmailResponse.js";
export type { EmailServiceHandlers } from "./generated/notification/EmailService.js";

const PROTO_PATH = path.resolve(__dirname, "../proto/notification.proto");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const notificationProto = grpc.loadPackageDefinition(
  packageDefinition,
) as unknown as import("./generated/notification.js").ProtoGrpcType;

export { grpc, notificationProto };
