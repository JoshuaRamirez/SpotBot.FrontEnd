import { Router } from '@angular/router';
export class NavigationService {
  public static Router: Router
  public static NavigateToExchangeScreen() {
    NavigationService.Router.navigate(['/exchange']);
  }
}
