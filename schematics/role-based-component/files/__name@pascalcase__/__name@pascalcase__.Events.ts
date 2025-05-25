import { <%= classify(name) %>Behaviors } from './<%= classify(name) %>.Behaviors';

export class <%= classify(name) %>Events {
  constructor(private behaviors: <%= classify(name) %>Behaviors) {}
}
