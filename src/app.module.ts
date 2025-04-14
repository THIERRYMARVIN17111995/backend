import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketService } from './ticket/ticket.service';
import { TicketController } from './ticket/ticket.controller';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [TicketModule],
  controllers: [AppController, TicketController],
  providers: [AppService, TicketService],
})
export class AppModule {}
