import { Injectable } from '@nestjs/common';
import { Ticket, TicketFilter, TicketResponse } from './interfaces/ticket';

@Injectable()
export class TicketService {
    private readonly tickets: Ticket[] = [
        { id: 1, agence: 'CONGO TRANS', prix: 10000, destination: 'Brazzaville - Pointe-Noire' },
        { id: 2, agence: 'OCEAN DU NORD', prix: 7500, destination: 'Brazzaville - Dolisie' },
        { id: 3, agence: 'CONGO TRANS', prix: 9000, destination: 'Brazzaville - Nkayi' },
        { id: 4, agence: 'STAR VOYAGES', prix: 12000, destination: 'Brazzaville - Pointe-Noire' },
        { id: 5, agence: 'OCEAN DU NORD', prix: 9500, destination: 'Brazzaville - Ouesso' },
        { id: 6, agence: 'BRAZZA EXPRESS', prix: 11000, destination: 'Brazzaville - Impfondo' },
        { id: 7, agence: 'EXPRESS DU NORD', prix: 8000, destination: 'Brazzaville - Ouesso' },
        { id: 8, agence: 'LEADER TRANS', prix: 10000, destination: 'Brazzaville - Pointe-Noire' },
        { id: 9, agence: 'STK VOYAGES', prix: 7000, destination: 'Brazzaville - Dolisie' },
        { id: 10, agence: 'CONGO TRANS', prix: 10500, destination: 'Brazzaville - Mossaka' },
        { id: 11, agence: 'OCEAN DU NORD', prix: 8500, destination: 'Brazzaville - Impfondo' },
        { id: 12, agence: 'BRAZZA EXPRESS', prix: 9300, destination: 'Brazzaville - Nkayi' },
        { id: 13, agence: 'STAR VOYAGES', prix: 9900, destination: 'Brazzaville - Oyo' },
        { id: 14, agence: 'LEADER TRANS', prix: 9400, destination: 'Brazzaville - Makoua' },
        { id: 15, agence: 'CONGO TRANS', prix: 8900, destination: 'Brazzaville - Boundji' },
        { id: 16, agence: 'OCEAN DU NORD', prix: 8800, destination: 'Brazzaville - Ollombo' },
        { id: 17, agence: 'STK VOYAGES', prix: 10100, destination: 'Brazzaville - Sibiti' },
        { id: 18, agence: 'BRAZZA EXPRESS', prix: 9700, destination: 'Brazzaville - Kinkala' },
        { id: 19, agence: 'STAR VOYAGES', prix: 9900, destination: 'Brazzaville - Kindamba' },
        { id: 20, agence: 'CONGO TRANS', prix: 11500, destination: 'Brazzaville - Loukolela' },
        { id: 21, agence: 'OCEAN DU NORD', prix: 7900, destination: 'Brazzaville - Liranga' },
        { id: 22, agence: 'EXPRESS DU NORD', prix: 8700, destination: 'Brazzaville - Dolisie' },
        { id: 23, agence: 'LEADER TRANS', prix: 9000, destination: 'Brazzaville - Pointe-Noire' },
        { id: 24, agence: 'STK VOYAGES', prix: 9100, destination: 'Brazzaville - Ouesso' },
        { id: 25, agence: 'BRAZZA EXPRESS', prix: 9500, destination: 'Brazzaville - Makabana' },
        { id: 26, agence: 'CONGO TRANS', prix: 10600, destination: 'Brazzaville - Ewo' },
        { id: 27, agence: 'OCEAN DU NORD', prix: 9600, destination: 'Brazzaville - Impfondo' },
        { id: 28, agence: 'STAR VOYAGES', prix: 10900, destination: 'Brazzaville - Ouésso' },
        { id: 29, agence: 'EXPRESS DU NORD', prix: 9800, destination: 'Brazzaville - Owando' },
        { id: 30, agence: 'LEADER TRANS', prix: 9200, destination: 'Brazzaville - Dolisie' },
    ];



    findAll(): Ticket[] {
        return this.tickets;
    }
  

    filterTickets(ticketFiltre: TicketFilter):TicketResponse {
        const { agence, priceMin, priceMax, page = 1, limit = 10 } = ticketFiltre;
      
        const filtered = this.tickets.filter(ticket => {
          const matchAgence = !agence || ticket.agence === agence;
          const matchMin = priceMin === undefined || ticket.prix >= priceMin;
          const matchMax = priceMax === undefined || ticket.prix <= priceMax;
          return matchAgence && matchMin && matchMax;
        });
      
        const total = filtered.length;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginated = filtered.slice(startIndex, endIndex);
      
        return {
          data: paginated,
          total,
          currentPage: page,
          totalPages: Math.ceil(total / limit),
        };
      }
      
}
