import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'about',component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'signup', component:SignupComponent},
  {path:'login',component: LoginComponent},
  {path:'listings', component:ListingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
