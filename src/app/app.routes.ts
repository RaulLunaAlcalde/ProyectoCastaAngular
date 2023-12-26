import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionsComponent } from './componentsNoRedundants/condicions/condicions.component';
import { FormulariComponent } from './componentsNoRedundants/formulari/formulari.component';
import {IndexComponent} from "./componentsNoRedundants/index/index.component";
import {ContactFormComponent} from "./componentsNoRedundants/contacte/contacte.component";
import {CatalegComponent} from "./componentsNoRedundants/cataleg/cataleg.component";

export const routes: Routes = [
  { path: 'condicions', component: CondicionsComponent },
  { path: 'formulari', component: FormulariComponent },
  { path: 'contacte', component: ContactFormComponent },
  { path: 'cataleg', component: CatalegComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
