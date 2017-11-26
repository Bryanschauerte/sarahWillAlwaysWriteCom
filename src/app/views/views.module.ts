import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MiscComponent } from './misc/misc.component';
import { FeaturedWorksComponent } from './featured-works/featured-works.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ViewsContainerComponent } from './views-container/views-container.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  exports: [],
  declarations: [
    ViewsContainerComponent,
    HomeComponent,
    MiscComponent,
    FeaturedWorksComponent,
    ContactComponent,
    AboutMeComponent
  ]
})
export class ViewsModule { }
