import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';
import { PageaideComponent } from './pageaide/pageaide.component';
import { PageaproposComponent } from './pageapropos/pageapropos.component';
import { PageclientsComponent } from './pageclients/pageclients.component';
import { PagecommandesComponent } from './pagecommandes/pagecommandes.component';
import { PageintegrationsComponent } from './pageintegrations/pageintegrations.component';
import { PageprixComponent } from './pageprix/pageprix.component';
import { PageproduitsComponent } from './pageproduits/pageproduits.component';
import { PagerapportsComponent } from './pagerapports/pagerapports.component';
import { PdfrapportsComponent } from './pdfrapports/pdfrapports.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'commandes', component: PagecommandesComponent},
  { path: 'produits', component: PageproduitsComponent},
  { path: 'clients', component: PageclientsComponent},
  { path: 'rapports', component: PagerapportsComponent},
  { path: 'integrations', component: PageintegrationsComponent},
  { path: 'pdfrapports', component: PdfrapportsComponent},
  { path: 'accueil', component: PageaccueilComponent},
  { path: 'prix', component: PageprixComponent},
  { path: 'aide', component: PageaideComponent},
  { path: 'apropos', component: PageaproposComponent},
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
