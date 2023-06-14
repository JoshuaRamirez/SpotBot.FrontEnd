import {Component} from '@angular/core';
import {ScreenLayoutData} from "./ScreenLayout.Data";
import {ScreenLayoutHandler} from "./ScreenLayout.Handler";
import {ScreenLayoutService} from "./ScreenLayout.Service";

@Component({
  selector: 'app-screen-layout',
  templateUrl: './ScreenLayout.Template.html',
  styleUrls: ['./ScreenLayout.Styles.scss']
})
export class ScreenLayoutComponent {
  public readonly Data: ScreenLayoutData;
  public readonly Handler: ScreenLayoutHandler;
  private readonly service: ScreenLayoutService;
  constructor() {
    this.Data = new ScreenLayoutData();
    this.service = new ScreenLayoutService(this.Data);
    this.Handler = new ScreenLayoutHandler(this.service);
  }
}
