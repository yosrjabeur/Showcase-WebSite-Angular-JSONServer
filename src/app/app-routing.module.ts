import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';
import { AuthorisationGuard } from './gards/authorisation.guard';
import { authGuard } from './gards/auth.guard';
import { NotAuthComponent } from './not-auth/not-auth.component';

const routes: Routes = [
  {path: "login", component: LoginComponent },
  {
    path:"admin",
    component:AdminTemplateComponent,
    canActivate:[authGuard], 
    children:[
    {path:"home", component:HomeComponent },
    {path:"products", component:ProductsComponent},
    { path: "new-products", component: AddproductComponent,canActivate:[AuthorisationGuard] },
    { path: "update/:id", component: EditproductComponent },
    { path: "details/:id", component: DetailsComponent},
    { path: "favorites", component: FavoritesComponent },
    { path: "notauth", component: NotAuthComponent },
    {path:"**",component:PageNotFoundComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
