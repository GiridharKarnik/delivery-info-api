import { Module } from '@nestjs/common';
import { CommsController } from './comms.controller';
import { CommsService } from './comms.service';
import { UsersModule } from '../users/users.module';
import { PricingModule } from '../pricing/pricing.module';

@Module({
  imports: [UsersModule, PricingModule],
  controllers: [CommsController],
  providers: [CommsService],
})
export class CommsModule {}
