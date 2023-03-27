import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainersModule } from './docker/containers/containers.module';

@Module({
  imports: [ContainersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
