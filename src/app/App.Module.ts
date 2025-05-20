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
import { ToolbarComponent } from './Toolbar/Toolbar.Component';
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
import {TextBoxComponent} from "./Components/Controls/TextBox/TextBox.Component";
import {DropDownComponent} from "./Components/Controls/DropDown/DropDown.Component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ExchangeScreenComponent,
    LoginScreenComponent,
    ScreenLayoutComponent,
    TrailingTradesComponent,
    TradeRowComponent,
    TextBoxComponent,
    DropDownComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
