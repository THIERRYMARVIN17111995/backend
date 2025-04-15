import { Body, Controller, Get, Post } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { Ticket, TicketFilter, TicketResponse } from './interfaces/ticket';

@Controller('ticket')
export class TicketController {
    constructor(private readonly ticketService: TicketService) {
        
    }
    @Get('all')
    findAll(): Ticket[] {
        return this.ticketService.findAll();
    }
    @Post('filter')
    filterTicketsByStatus(@Body() ticketFiltre:TicketFilter): TicketResponse {
        return this.ticketService.filterTickets(ticketFiltre);
    }
}
