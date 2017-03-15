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
  {position: 1, name: 'Moon1', description: '88 earth days to orbit the sun' },
  {position: 2, name: 'Moon2', description: '225 earth days to orbit the sun' },
  {position: 3, name: 'Moon3', description: '365 earth days to orbit the sun' },
  {position: 4, name: 'Moon4', description: '686 earth days to orbit the sun' },
  {position: 5, name: 'Moon5', description: '12 earth years to orbit the sun' },
  {position: 6, name: 'Moon6', description: '291 earth years to orbit the sun' },
  {position: 7, name: 'Moon7', description: '84 earth years to orbit the sun' },
  {position: 8, name: 'Moon8', description: '165 earth years to orbit the sun' }
];