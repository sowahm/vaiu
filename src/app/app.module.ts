import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './homepage/homepage.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { FormsModule } from '@angular/forms';
import { AccormodationComponent } from './accormodation/accormodation.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { QrcodesComponent } from './qrcodes/qrcodes.component';
import { CouponsComponent } from './coupons/coupons.component';
import { RoomsComponent } from './accormodation/rooms/rooms.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperienciesComponent } from './lifestyle/experiencies/experiencies.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { EventsComponent } from './events/events.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    AccormodationComponent,
    RestaurantsComponent,
    QrcodesComponent,
    CouponsComponent,
    RoomsComponent,
    FoodAndBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperienciesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    EventsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    CelebrationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {}
