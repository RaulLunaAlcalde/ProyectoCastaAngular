import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionsComponent } from './componentsNoRedundants/condicions/condicions.component';
import { FormulariComponent } from './componentsNoRedundants/formulari/formulari.component';
import {IndexComponent} from "./componentsNoRedundants/index/index.component";
import {CatalegComponent} from "./componentsNoRedundants/cataleg/cataleg.component";
import {FormulariIniciSessioComponent} from "./componentsNoRedundants/formulari-inici-sessio/formulari-inici-sessio.component";
import {CistellaComponent} from "./componentsNoRedundants/cistella/cistella.component";

export const routes: Routes = [
  { path: 'condicions', component: CondicionsComponent },
  { path: 'formulari', component: FormulariComponent },
  { path: 'cataleg', component: CatalegComponent },
  { path: 'inicisessio', component: FormulariIniciSessioComponent },
  { path: 'cistella', component: CistellaComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
