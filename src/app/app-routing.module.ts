import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MiscComponent } from './views/misc/misc.component';
import { FeaturedWorksComponent } from './views/featured-works/featured-works.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
import { ViewsContainerComponent } from './views/views-container/views-container.component';

export const routes: Routes = [
  {
    path: '',
    component: ViewsContainerComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'random-posts', component: MiscComponent },
      { path: 'featured-works', component: FeaturedWorksComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutMeComponent },
      {
        path: '**',
        redirectTo: ''
      }
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
