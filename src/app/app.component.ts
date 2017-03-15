import { Component, OnInit } from '@angular/core';
import { Planets} from './planets.model';
import { PlanetsService } from './planets.service';

@Component({
  selector: 'Planets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  planetsList: Planets[] = [];
  constructor(
    private _planetservice: PlanetsService) {}

  ngOnInit() {
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }
}