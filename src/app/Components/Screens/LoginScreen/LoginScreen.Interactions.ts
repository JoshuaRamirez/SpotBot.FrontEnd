import {LoginScreenBehaviors} from "./LoginScreen.Behaviors";

export class LoginScreenInteractions {
  private readonly _behaviors: LoginScreenBehaviors;
  public constructor(behaviors: LoginScreenBehaviors) {
    this._behaviors = behaviors;
  }
  async LoginButtonClicked() : Promise<void> {
    await this._behaviors.Login();
  }
}
