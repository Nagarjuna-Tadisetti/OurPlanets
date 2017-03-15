import { Injectable } from '@angular/core';
import { Galaxies } from './galaxies.model';

@Injectable()
export class GalaxiesService {

  constructor() {}
  getGalaxies(): Promise<Galaxies[]>{
    return Promise.resolve(GALAXYDATA);
  }
}

const GALAXYDATA: Galaxies[] = [
  {position: 1, name: 'Andromeda', description: '88 earth days to orbit the sun' },
  {position: 2, name: 'Black Eye', description: '225 earth days to orbit the sun' },
  {position: 3, name: 'Cartwheel', description: '365 earth days to orbit the sun' },
  {position: 4, name: 'Cigar', description: '686 earth days to orbit the sun' },
  {position: 5, name: 'Milky Way', description: '12 earth years to orbit the sun' },
  {position: 6, name: 'Whirlpool', description: '291 earth years to orbit the sun' },
  {position: 7, name: 'Tadpole', description: '84 earth years to orbit the sun' },
  {position: 8, name: 'Sunflower', description: '165 earth years to orbit the sun' }
];