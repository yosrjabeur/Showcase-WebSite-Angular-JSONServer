import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { NotAuthComponent } from './not-auth/not-auth.component';
import { DetailsComponent } from './details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AddproductComponent,
    PageNotFoundComponent,
    EditproductComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    AdminTemplateComponent,
    FavoritesComponent,
    NotAuthComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule 

  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
