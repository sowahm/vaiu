import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AccormodationComponent } from './accormodation/accormodation.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';


const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path: '**', component: HomepageComponent },
  {path: 'dashboard', component: HomepageComponent },
  {path: 'accomodation', component: AccormodationComponent },
  {path: 'cellebration', component: CelebrationsComponent},
  {path: 'food-and-beverage', component: FoodAndBeverageComponent },
  {path: 'lifestyle', component: LifestyleComponent },
  {path: 'weddings', component: WeddingsComponent },
  {path: 'offers', component: OffersComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'signup', component: SignupComponent },





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
