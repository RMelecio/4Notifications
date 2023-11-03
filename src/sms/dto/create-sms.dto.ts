import { IsString } from 'class-validator';

export class CreateSmsDto {
  @IsString()
  phoneNumber: string;

  @IsString()
  message: string;
}
