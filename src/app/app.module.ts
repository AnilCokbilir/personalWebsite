import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyworkComponent } from './mywork/mywork.component';
import { MeComponent } from './me/me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent,
    MyskillsComponent,
    MyworkComponent,
    MeComponent,
    ContactComponent,
    FooterComponent,
    ImpressumComponent,
    DatenschutzComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
