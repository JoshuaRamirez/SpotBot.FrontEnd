import { <%= classify(name) %>Behaviors } from './<%= classify(name) %>.Behaviors';

export class <%= classify(name) %>Interactions {
  constructor(private behaviors: <%= classify(name) %>Behaviors) {}
}
