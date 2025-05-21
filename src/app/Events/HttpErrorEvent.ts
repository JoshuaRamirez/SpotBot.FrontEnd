import {AppEvent} from "../Core/AppEvent";
import {AxiosError} from "axios";

export class HttpErrorEvent extends AppEvent {
  constructor(public readonly Error: AxiosError) {
    super();
  }
}
