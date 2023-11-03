import { Injectable } from '@nestjs/common';
import { CreateSmsDto } from './dto/create-sms.dto';

@Injectable()
export class SmsService {
  send(data: CreateSmsDto) {
    console.log('SMS service create');
    console.log(data);
    return { status: 'Fallo' };
  }
}
