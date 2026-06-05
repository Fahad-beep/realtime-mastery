// Original file: proto/notification.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { EmailRequest as _notification_EmailRequest, EmailRequest__Output as _notification_EmailRequest__Output } from '../notification/EmailRequest';
import type { EmailResponse as _notification_EmailResponse, EmailResponse__Output as _notification_EmailResponse__Output } from '../notification/EmailResponse';

export interface EmailServiceClient extends grpc.Client {
  VerifyEmailSent(argument: _notification_EmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmailSent(argument: _notification_EmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmailSent(argument: _notification_EmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  VerifyEmailSent(argument: _notification_EmailRequest, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailSent(argument: _notification_EmailRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailSent(argument: _notification_EmailRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailSent(argument: _notification_EmailRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  verifyEmailSent(argument: _notification_EmailRequest, callback: grpc.requestCallback<_notification_EmailResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface EmailServiceHandlers extends grpc.UntypedServiceImplementation {
  VerifyEmailSent: grpc.handleUnaryCall<_notification_EmailRequest__Output, _notification_EmailResponse>;
  
}

export interface EmailServiceDefinition extends grpc.ServiceDefinition {
  VerifyEmailSent: MethodDefinition<_notification_EmailRequest, _notification_EmailResponse, _notification_EmailRequest__Output, _notification_EmailResponse__Output>
}
