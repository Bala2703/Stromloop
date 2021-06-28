import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Angular materials impoprts Section
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlComponent } from './sl/sl.component';
import { ParallaxDirective } from './parallax.directive';
import { MoonDirective } from './moon.directive';
import { StarsDirective } from './stars.directive';

@NgModule({
  declarations: [
    AppComponent,
    SlComponent,
    ParallaxDirective,
    MoonDirective,
    StarsDirective,
    
  ],
  imports: [

    //Angular module imports
    MatToolbarModule,
    MatButtonModule,
    MatIconModule, 

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
