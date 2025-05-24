import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './App.Routing';
import { AppComponent } from './App.Component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarComponent } from './Presentation/Layout/Toolbar/Toolbar.Component';
import { ExchangeScreenComponent } from './Presentation/Screens/Exchange/ExchangeScreen.Component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginScreenComponent } from './Presentation/Screens/Login/LoginScreen.Component';
import {MatIconModule} from "@angular/material/icon";
import {ScreenLayoutComponent} from "./Presentation/Layout/ScreenLayout/ScreenLayout.Component";
import {TrailingTradesScreenComponent} from "./Presentation/Screens/TrailingTrades/TrailingTradesScreen.Component";
import {GrowthTraderScreenComponent} from "./Presentation/Screens/GrowthTrader/GrowthTraderScreen.Component";
import {MatSelectModule} from "@angular/material/select";
import {TradeRowComponent} from "./Presentation/Screens/TrailingTrades/TradeRow/TradeRow.Component";
import {TextBoxComponent} from "./Presentation/Controls/TextBox/TextBox.Component";
import {DropDownComponent} from "./Presentation/Controls/DropDown/DropDown.Component";
import {GrowthTradingOptionsComponent} from "./Presentation/Screens/GrowthTrader/GrowthTradingOptions/GrowthTradingOptions.Component";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExchangeScreenComponent,
    LoginScreenComponent,
    ScreenLayoutComponent,
    TrailingTradesScreenComponent,
    GrowthTraderScreenComponent,
    TradeRowComponent,
    TextBoxComponent,
    DropDownComponent,
    GrowthTradingOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
