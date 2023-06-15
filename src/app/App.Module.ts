import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './App.Routing.Module';
import { AppComponent } from './App.Component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarComponent } from './Toolbar/toolbar.component';
import { ExchangeScreenComponent } from './Components/Screens/ExchangeScreen/ExchangeScreen.Component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginScreenComponent } from './Components/Screens/LoginScreen/LoginScreen.Component';
import {MatIconModule} from "@angular/material/icon";
import {ScreenLayoutComponent} from "./Components/Layout/ScreenLayout.Component";
import {TrailingTradesComponent} from "./Components/Screens/TrailingTradesScreen/TrailingTrades.Component";
import {MatSelectModule} from "@angular/material/select";
import {TradeRowComponent} from "./Components/Screens/TrailingTradesScreen/TradeRow/TradeRow.Component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExchangeScreenComponent,
    LoginScreenComponent,
    ScreenLayoutComponent,
    TrailingTradesComponent,
    TradeRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
