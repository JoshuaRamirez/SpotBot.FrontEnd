import { Router } from '@angular/router';
export class NavigationService {
  static Router: Router
  static NavigateToExchangeScreen() {
    NavigationService.Router.navigate(['/exchange']);
  }
}
