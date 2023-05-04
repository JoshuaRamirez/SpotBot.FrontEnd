import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginScreenComponent} from "./Components/Screens/LoginScreen/LoginScreen.Component";
import {ExchangeScreenComponent} from "./Components/Screens/ExchangeScreen/ExchangeScreen.Component";

const routes: Routes = [
  { path: 'login', component: LoginScreenComponent },
  { path: 'exchange', component: ExchangeScreenComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
