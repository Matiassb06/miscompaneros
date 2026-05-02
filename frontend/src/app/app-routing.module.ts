import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }         from './pages/home/home.component';
import { CompaProfileComponent } from './pages/compa-profile/compa-profile.component';
import { AddCompaComponent }     from './pages/add-compa/add-compa.component';

const routes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'compa/:id', component: CompaProfileComponent },
  { path: 'agregar',   component: AddCompaComponent },
  { path: '**',        redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
