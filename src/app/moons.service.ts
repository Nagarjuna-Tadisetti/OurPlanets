import { Injectable } from '@angular/core';
import { Moons } from './moons.model';

@Injectable()
export class MoonsService {

  constructor() {}
  getMoons(): Promise<Moons[]>{
    return Promise.resolve(MOONDATA);
  }
}

const MOONDATA: Moons[] = [
  {position: 1, name: 'Elara', description: '88 earth days to orbit the sun' },
  {position: 2, name: 'Cyllene', description: '225 earth days to orbit the sun' },
  {position: 3, name: 'Eukelade', description: '365 earth days to orbit the sun' },
  {position: 4, name: 'Eurydome', description: '686 earth days to orbit the sun' },
  {position: 5, name: 'Iocaste', description: '12 earth years to orbit the sun' },
  {position: 6, name: 'Kalyke', description: '291 earth years to orbit the sun' },
  {position: 7, name: 'Pasithee', description: '84 earth years to orbit the sun' },
  {position: 8, name: 'Praxidike', description: '165 earth years to orbit the sun' }
];