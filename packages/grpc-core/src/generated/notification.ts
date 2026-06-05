import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { EmailRequest as _notification_EmailRequest, EmailRequest__Output as _notification_EmailRequest__Output } from './notification/EmailRequest';
import type { EmailResponse as _notification_EmailResponse, EmailResponse__Output as _notification_EmailResponse__Output } from './notification/EmailResponse';
import type { EmailServiceClient as _notification_EmailServiceClient, EmailServiceDefinition as _notification_EmailServiceDefinition } from './notification/EmailService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  notification: {
    EmailRequest: MessageTypeDefinition<_notification_EmailRequest, _notification_EmailRequest__Output>
    EmailResponse: MessageTypeDefinition<_notification_EmailResponse, _notification_EmailResponse__Output>
    EmailService: SubtypeConstructor<typeof grpc.Client, _notification_EmailServiceClient> & { service: _notification_EmailServiceDefinition }
  }
}

