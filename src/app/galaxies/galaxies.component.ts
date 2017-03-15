import { Component, OnInit } from '@angular/core';
import { Galaxies} from './galaxies.model';
import { GalaxiesService } from './galaxies.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'Galaxies',
  templateUrl: './galaxies.html',
})
export class GalaxiesComp implements OnInit {
  galaxiesList: Galaxies[] = [];
  constructor(
    private _galaxyservice: GalaxiesService
    private router: Router) {}

  ngOnInit() {
    this._galaxyservice.getGalaxies().then(galaxies => this.galaxiesList = galaxies);
  }
    onSelect(galaxy: Galaxies) {
    this.router.navigate(['/galaxies', galaxy.position]);
  }
}