import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScreenLayoutComponent} from "./Presentation/Layout/ScreenLayout/ScreenLayout.Component";
import {ExchangeScreenComponent} from "./Presentation/Screens/Exchange/ExchangeScreen.Component";
import {GrowthTraderScreenComponent} from "./Presentation/Screens/GrowthTrader/GrowthTraderScreen.Component";
import {LoginScreenComponent} from "./Presentation/Screens/Login/LoginScreen.Component";
import {TrailingTradesScreenComponent} from "./Presentation/Screens/TrailingTrades/TrailingTradesScreen.Component";


const routes: Routes = [
  {
    path: '',
    component: ScreenLayoutComponent,
    children: [
      { path: 'login', component: LoginScreenComponent },
      { path: 'exchange', component: ExchangeScreenComponent },
      { path: 'trailing-trades', component: TrailingTradesScreenComponent },
      { path: 'growth-trader', component: GrowthTraderScreenComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
