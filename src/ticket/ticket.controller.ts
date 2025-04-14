import { Controller, Get } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket } from './interfaces/ticket';

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) {
        
    }
    @Get('all')
    findAll(): Ticket[] {
        return this.ticketService.findAll();
    }
}
