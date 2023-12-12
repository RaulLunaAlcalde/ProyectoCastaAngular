import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionsComponent } from './condicions/condicions.component';
import { FormulariComponent } from './formulari/formulari.component';

export const routes: Routes = [
  { path: 'condicions', component: CondicionsComponent },
  { path: 'formulari', component: FormulariComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
