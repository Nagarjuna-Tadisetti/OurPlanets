import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Moons } from './moons.model';


@Component({
  selector: 'MoonDetails',
  template: `<h1 [moon]="Moon">Showing details of Moon: {{moon.name}}</h1>`,
})
export class MoonDetailsComp implements OnInit {
    @Input() moon: Moons;
    id: number;
 constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
      this.moon.name = "NewMoon";
  }
}