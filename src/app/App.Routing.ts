import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from "./Components/Screens/LoginScreen/LoginScreen.Component";
import { ExchangeScreenComponent } from "./Components/Screens/ExchangeScreen/ExchangeScreen.Component";
import { ScreenLayoutComponent } from "./Components/Layout/ScreenLayout.Component";
import {TrailingTradesComponent} from "./Components/Screens/TrailingTradesScreen/TrailingTrades.Component";
import {GrowthTraderComponent} from "./Components/Screens/GrowthTraderScreen/GrowthTrader.Component";

const routes: Routes = [
  {
    path: '',
    component: ScreenLayoutComponent,
    children: [
      { path: 'login', component: LoginScreenComponent },
      { path: 'exchange', component: ExchangeScreenComponent },
      { path: 'trailing-trades', component: TrailingTradesComponent },
      { path: 'growth-trader', component: GrowthTraderComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
