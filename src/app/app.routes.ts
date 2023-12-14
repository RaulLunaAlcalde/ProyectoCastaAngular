import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionsComponent } from './componentsNoRedundants/condicions/condicions.component';
import { FormulariComponent } from './componentsNoRedundants/formulari/formulari.component';
import { CatalegComponent } from './componentsNoRedundants/cataleg/cataleg.component';
import { CistellaComponent } from "./componentsNoRedundants/cistella/cistella.component";
import { ContacteComponent } from "./componentsNoRedundants/contacte/contacte.component";
import { FormulariIniciSessioComponent } from "./componentsNoRedundants/formulari-inici-sessio/formulari-inici-sessio.component";
import { MenuComponent } from "./componentsRedundants/menu/menu.component";
import { IndexComponent } from "./componentsNoRedundants/index/index.component";

export const routes: Routes = [
  { path: 'condicions', component: CondicionsComponent },
  { path: 'formulari', component: FormulariComponent },
  { path: 'cataleg', component: CatalegComponent },
  { path: 'cistella', component: CistellaComponent },
  { path: 'contacte', component: ContacteComponent },
  { path: 'formulari_inici_sessio', component: FormulariIniciSessioComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
