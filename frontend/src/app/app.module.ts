import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule }      from './app-routing.module';
import { AppComponent }          from './app.component';

// Pages
import { HomeComponent }         from './pages/home/home.component';
import { CompaProfileComponent } from './pages/compa-profile/compa-profile.component';
import { RatingFormComponent }   from './pages/rating-form/rating-form.component';
import { AddCompaComponent }     from './pages/add-compa/add-compa.component';

// Shared
import { NavbarComponent }      from './shared/components/navbar/navbar.component';
import { StarRatingComponent }  from './shared/components/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompaProfileComponent,
    RatingFormComponent,
    AddCompaComponent,
    NavbarComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
