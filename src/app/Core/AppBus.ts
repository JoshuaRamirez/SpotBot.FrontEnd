interface ISubscription<TEvent> {
  callback: (payload: TEvent) => void;
  eventName: string;
}

export class AppBus {
  private static _subscriptions: ISubscription<unknown>[] = [];

  public static Subscribe<TEvent>(eventName: string, callback: (payload: TEvent) => void, thisArg?: any): void {
    const subscription: ISubscription<TEvent> = {
      callback: thisArg ? callback.bind(thisArg) : callback,
      eventName: eventName
    };
    this._subscriptions.push(subscription as ISubscription<unknown>);
  }

  public static Publish<TEvent>(eventName: string, payload: TEvent): void {
    this._subscriptions
      .filter(subscription => subscription.eventName === eventName)
      .forEach(subscription => subscription.callback(payload));
  }
}
