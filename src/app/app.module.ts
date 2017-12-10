import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { TitleComponent } from './components/title/title.component';
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
