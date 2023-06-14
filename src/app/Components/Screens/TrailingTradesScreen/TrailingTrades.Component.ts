import {Component} from "@angular/core";
import {TrailingTradesData} from "./TrailingTrades.Data";

@Component({
  selector: 'app-trailing-trades-screen',
  templateUrl: './TrailingTrades.Template.html',
  styleUrls: ['./TrailingTrades.Styles.scss']})
export class TrailingTradesComponent {
  public Data: TrailingTradesData;
  constructor() {
    this.Data = new TrailingTradesData();
  }
}
