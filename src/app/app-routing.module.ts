import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { AddApartmentComponent } from './apartment/add-apartment/add-apartment.component';
import { EditApartmentComponent } from './apartment/edit-apartment/edit-apartment.component';

import { AddApartmentComponent } from './apartment/addApartment/addApartment.component';
import { EditApartmentComponent } from './apartment/editApartment/editApartment.component';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';

import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

import { ProductComponent } from './products/product/product.component';
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

  {path: 'apartment', children:[
    {path: 'add', component: AddApartmentComponent},
    {path: 'edit', component: EditApartmentComponent}
  ]},
  {path:'find', component:ListingComponent},
  {path:'find/apart-details', component:ApartmentDetailsComponent},
  {path:'profile', component:ProfileComponent},
  {path:'users', component:UsersComponent},
  {path:'users/edit', component:EditUserComponent},
  {path:'users/profile', component:ProfileComponent},








  {path:'listings', component:ListingComponent, 
  // canActivate:[AuthGuard]
},
{path:'product',component: ProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
