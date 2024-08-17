import { Router } from '@angular/router';
export class NavigationService {
  public static Router: Router
  public static async NavigateToExchangeScreen() : Promise<Boolean> {
    return NavigationService.Router.navigate(['/exchange']);
  }
}
