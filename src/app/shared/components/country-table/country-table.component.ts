import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@models/country';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent {
  @Input() public countries: Country[];

  public trackByFn(index: any, item: any) {
    return index;
  }

}
