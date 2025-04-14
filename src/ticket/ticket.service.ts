import { Injectable } from '@nestjs/common';
import { Ticket } from './interfaces/ticket';

@Injectable()
export class TicketService {
    private readonly tickets :Ticket[] = [
        { id: 1, agence: 'CONGO TRANS', prix: 10000, destination: 'Brazzaville - Pointe-Noire' },
        { id: 2, agence: 'OCEAN DU NORD', prix: 7500, destination: 'Brazzaville - Dolisie' },
        { id: 3, agence: 'CONGO TRANS', prix: 9000, destination: 'Brazzaville - Nkayi' },
        { id: 4, agence: 'STAR VOYAGES', prix: 12000, destination: 'Brazzaville - Pointe-Noire' },
        { id: 5, agence: 'OCEAN DU NORD', prix: 9500, destination: 'Brazzaville - Ouesso' },
    ]


    findAll(): Ticket[] {
        return this.tickets;
      }
}
