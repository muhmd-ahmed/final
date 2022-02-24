import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddApartmentComponent } from './apartment/addApartment/addApartment.component';
import { EditApartmentComponent } from './apartment/editApartment/editApartment.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: 'apartment', children:[
    {path: 'add', component: AddApartmentComponent},
    {path: 'edit', component: EditApartmentComponent}
  ]},
  {path:'home',component: HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component: LoginComponent},
  {path:'listings', component:ListingComponent, 
  // canActivate:[AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
