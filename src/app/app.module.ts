import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlanetsService } from './planets.service';
import { MoonsService } from './moons.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MyComp } from './mytemp';
import {MoonsComp} from './moons.component';
import {MoonDetailsComp} from './moondetailcomp';

const appRoutes: Routes = [
  { path: 'moons', component: MoonsComp,
    children: [
      { path: ':id',
        component: MoonDetailsComp,
      }
    ]},
  
];

@NgModule({
  declarations: [
    AppComponent,MyComp,MoonsComp,MoonDetailsComp
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PlanetsService,MoonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }