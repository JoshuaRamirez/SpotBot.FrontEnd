import { <%= classify(name) %>Model } from './<%= classify(name) %>.Model';
import { <%= classify(name) %>Api } from './<%= classify(name) %>.Api';

export class <%= classify(name) %>Behaviors {
  constructor(private model: <%= classify(name) %>Model, private api: <%= classify(name) %>Api) {}
}
