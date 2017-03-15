import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'MoonDetails',
  template: `<h1>Showing details of Moon: {{id}}</h1>`,
})
export class MoonDetailsComp implements OnInit {
    id: number;
 constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.params.subscribe(params => {
       this.id = +params['id'];
    });
    
  }
}