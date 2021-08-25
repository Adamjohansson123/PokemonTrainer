
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { TrainerComponent } from './trainer/trainer.component';

const routes: Routes = [
  { path: '/', component: LoginComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'trainer', component: TrainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
