import { Controller } from '@nestjs/common';
import { GrpcMethod, Payload } from '@nestjs/microservices';
import { SmsService } from './sms.service';
import { CreateSmsDto } from './dto/create-sms.dto';

@Controller('sendSms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @GrpcMethod('SmsService', 'send')
  send(@Payload() createSmsDto: CreateSmsDto) {
    return this.smsService.send(createSmsDto);
  }
}
