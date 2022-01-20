import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ShortSectionModule} from "./modules/short-section/short-section.module";
import {ShortSectionComponent} from "./modules/short-section/component/short-section.component";


@NgModule({
  declarations: [
    AppComponent,
    ShortSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShortSectionModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
