import { Component, OnInit } from '@angular/core';
import { Moons} from './moons.model';
import { MoonsService } from './moons.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'Moons-root',
  templateUrl: './moons.html',
  styleUrls: ['./app.component.css'],
})
export class MoonsComp implements OnInit {
  moonsList: Moons[] = [];
  constructor(
    private _moonservice: MoonsService,
    private router: Router) {}

  ngOnInit() {
    this._moonservice.getMoons().then(moons => this.moonsList = moons);
  }
    onSelect(moon: Moons) {
    this.router.navigate(['/moons', moon.position]);
  }
}