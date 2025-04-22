import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { PieChartComponent } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { colorFromString } from '../../../../util/colors';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-weight-distribution',
  templateUrl: './weight-distribution.component.html',
  imports: [PieChartComponent],
})
export class WeightDistributionComponent {
  private state = inject(GLOBAL_STATE);

  readonly weightStats = computed(() =>
    this.state.packlist
      .model()
      .map((category) => ({
        name: category.name,
        value: category.totalWeight / this.state.packlist.stats().totalWeight,
        color: colorFromString(category.name),
      }))
      .filter((category) => category.value > 0),
  );
}
