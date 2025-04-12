import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  message: string;

  @IsNumber()
  @IsOptional()
  delayInSeconds?: number;
}
