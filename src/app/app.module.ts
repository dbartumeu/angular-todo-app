import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';

import "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/debounceTime";

import { AppComponent } from './app.component';
import {Projects} from '../app/services/projects.service';
import { DebounceDirective } from './directives/debounce.directive';

@NgModule({
  declarations: [
    AppComponent,
    DebounceDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MasonryModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    Projects,
    { provide: 'Window',  useValue: window }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
