import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shorter',
    pathMatch: 'full'
  },
  {
    path: 'shorter',
    loadChildren: () => import('src/app/modules/short-section/short-section.module').then(m => m.ShortSectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
