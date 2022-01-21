import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoaderComponent} from "../../shared/loader/loader.component";
import {RedirectConfirmationComponent} from './children/redirect-confirmation/redirect-confirmation.component';
import {ShorterFormComponent} from './children/shorter-form/shorter-form.component';
import {ShortSectionRoutingModule} from "./short-section-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoaderComponent,
    RedirectConfirmationComponent,
    ShorterFormComponent
  ],
  imports: [
    CommonModule,
    ShortSectionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShortSectionModule {
}
