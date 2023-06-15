import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from "@angular/router";
import {NavigationService} from "./Services/NavigationService";
import {LocalStorageService} from "./Services/LocalStorageService";

@Component({
  selector: 'app-root',
  templateUrl: './App.Component.html',
  styleUrls: ['./App.Component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(router: Router) {
    NavigationService.Router = router;
    LocalStorageService.GetUserToken();
    LocalStorageService.GetEncryptionKey();
  }
}
