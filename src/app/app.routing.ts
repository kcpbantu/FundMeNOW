import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { RequestDetailComponent }   from './request-detail/request-detail.component';




const appRoutes: Routes = [
  {
  path: '',
    component: WelcomeComponent
  },
  {
  path: 'about',
    component: AboutComponent
  },
  {
  path: 'admin',
    component: AdminComponent
  },
  {
  path: 'request/:id',
    component: RequestDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
