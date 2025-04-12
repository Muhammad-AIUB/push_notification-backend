import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class ScheduleDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsDateString()
  scheduleAt: string;
}
