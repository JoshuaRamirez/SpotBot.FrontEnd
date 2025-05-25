import { Component } from '@angular/core';
import { <%= classify(name) %>Model } from './<%= classify(name) %>.Model';
import { <%= classify(name) %>Api } from './<%= classify(name) %>.Api';
import { <%= classify(name) %>Behaviors } from './<%= classify(name) %>.Behaviors';
import { <%= classify(name) %>Events } from './<%= classify(name) %>.Events';
import { <%= classify(name) %>Interactions } from './<%= classify(name) %>.Interactions';

@Component({
  selector: 'app-<%= dasherize(name) %>',
  templateUrl: './<%= classify(name) %>.Template.html',
  styleUrls: ['./<%= classify(name) %>.Styles.scss']
})
export class <%= classify(name) %>Component {
  public readonly Model = new <%= classify(name) %>Model();
  private readonly _api = new <%= classify(name) %>Api();
  private readonly _behaviors = new <%= classify(name) %>Behaviors(this.Model, this._api);
  private readonly _events = new <%= classify(name) %>Events(this._behaviors);
  public readonly Interactions = new <%= classify(name) %>Interactions(this._behaviors);
}
