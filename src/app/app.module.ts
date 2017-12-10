import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { TitleComponent } from './title/title.component';
import { MenuService } from './services/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MenuService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
