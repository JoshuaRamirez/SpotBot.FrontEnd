import {AppBus} from "./AppBus";

export abstract class AppEvent<T = unknown> {
  public get EventName(): string {
    return this.constructor.name;
  }

  public Publish(): void {
    AppBus.Publish(this.EventName, this);
  }

  public static Subscribe<TEvent extends AppEvent<TEvent>>(callback: (payload: TEvent) => void, thisArg?: any): void {
    AppBus.Subscribe(this.name, callback, thisArg);
  }
}
