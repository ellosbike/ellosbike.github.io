import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/admin/login/login.component';
import { HomeClientComponent } from './pages/client/home-client/home-client.component';
import { AuthGuard } from './auth/auth.guard';
import { BikeHelpComponent } from './pages/client/bike-help/bike-help.component';
import { ListOfBikesComponent } from './pages/client/bike/list-of-bikes/list-of-bikes.component';
import { ListOfStationsComponent } from './pages/client/list-of-stations/list-of-stations.component';
import { DetailOfBikeComponent } from './pages/client/bike/detail-of-bike/detail-of-bike.component';
import { AboutComponent } from 'src/app/pages/about/about.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  /*{
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: './layout/dashboard/dashboard.module#DashboardModule'
  },*/
  { path: 'home', component: HomeClientComponent },
  { path: 'cade-sua-bike', component: BikeHelpComponent },
  { path: 'bicicletas', component: ListOfBikesComponent },
  { path: 'postos', component: ListOfStationsComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'bicicleta/:id', component: DetailOfBikeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  HomeClientComponent,
  BikeHelpComponent,
  ListOfBikesComponent,
  ListOfStationsComponent,
  DetailOfBikeComponent,
  AboutComponent
];
