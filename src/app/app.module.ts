import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { BlackLineComponent } from './black-line/black-line.component';
import { ServicesCardsComponent } from './services-cards/services-cards.component';
import { PortfoliosCardsComponent } from './portfolios-cards/portfolios-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroductionComponent,
    BlackLineComponent,
    ServicesCardsComponent,
    PortfoliosCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
