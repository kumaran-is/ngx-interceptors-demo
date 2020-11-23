import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@models/country';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {

  @Input() public country: Country;
}
