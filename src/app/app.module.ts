import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraphcourbesComponent } from './graphcourbes/graphcourbes.component';
import { TableauventeComponent } from './tableauvente/tableauvente.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VentecommandepanierComponent } from './ventecommandepanier/ventecommandepanier.component';
import { PagecommandesComponent } from './pagecommandes/pagecommandes.component';
import { PageproduitsComponent } from './pageproduits/pageproduits.component';
import { PageclientsComponent } from './pageclients/pageclients.component';
import { PagerapportsComponent } from './pagerapports/pagerapports.component';
import { PageintegrationsComponent } from './pageintegrations/pageintegrations.component';
import { PdfrapportsComponent } from './pdfrapports/pdfrapports.component';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';
import { PageprixComponent } from './pageprix/pageprix.component';
import { PageaideComponent } from './pageaide/pageaide.component';
import { PageaproposComponent } from './pageapropos/pageapropos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    GraphcourbesComponent,
    TableauventeComponent,
    NotFoundComponent,
    VentecommandepanierComponent,
    PagecommandesComponent,
    PageproduitsComponent,
    PageclientsComponent,
    PagerapportsComponent,
    PageintegrationsComponent,
    PdfrapportsComponent,
    PageaccueilComponent,
    PageprixComponent,
    PageaideComponent,
    PageaproposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
