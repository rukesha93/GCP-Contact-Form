import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full',
  },

  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/contact',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
