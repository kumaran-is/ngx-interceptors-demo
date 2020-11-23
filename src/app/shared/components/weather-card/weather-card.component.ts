import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Weather } from '@models/weather';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() public weather: Weather;
}
