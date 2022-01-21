import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShortSectionComponent} from "./component/short-section.component";
import {ShorterFormComponent} from "./children/shorter-form/shorter-form.component";
import {RedirectConfirmationComponent} from "./children/redirect-confirmation/redirect-confirmation.component";

const routes: Routes = [
  {
    path: '',
    component: ShortSectionComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'builder'
      },
      {
        path: 'builder',
        component: ShorterFormComponent
      },
      {
        path: 'link/:id',
        component: RedirectConfirmationComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortSectionRoutingModule { }
