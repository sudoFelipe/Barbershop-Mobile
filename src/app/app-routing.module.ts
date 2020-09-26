import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page'
import { ListPage } from './pages/list/list.page'
import { MessengerPage } from './pages/messenger/messenger.page'
import { SingleImageViewPage } from './pages/single-image-view/single-image-view.page'
import { LoginPage } from './pages/login/login.page';
import { ServicesPage } from './pages/services/services.page';
import { ContactPage } from './pages/contact/contact.page';
import { BarbersPage } from './pages/barbers/barbers.page'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePage},
  { path: 'list', component: ListPage},
  { path: 'messenger', component: MessengerPage},
  { path: 'about', component: SingleImageViewPage},
  { path: 'login', component: LoginPage },
  { path: 'services', component: ServicesPage},
  { path: 'contact', component: ContactPage },
  { path: 'barbers', component: BarbersPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
