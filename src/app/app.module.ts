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
    VentecommandepanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
