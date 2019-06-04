import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContainerComponent } from './container/container.component';
import { CardModule } from './card/card.module';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SpyTargetDirective } from './directives/spy-target.directive';
import { SpyOnDirective } from './directives/spy-on.directive';
import { SocialIconsModule } from './social-icons/social-icons.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    ContainerComponent,
    MenuComponent,
    AboutComponent,
    ProjectsComponent,
    SpyTargetDirective,
    SpyOnDirective,
  ],
  imports: [BrowserModule, CardModule, SocialIconsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
