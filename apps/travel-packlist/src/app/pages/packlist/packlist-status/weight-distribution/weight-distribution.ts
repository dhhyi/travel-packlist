import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { PieChart } from '@travel-packlist/components';
import { GLOBAL_STATE } from '@travel-packlist/state';

import { colorFromString } from '../../../../util/colors';

@Component({
  selector: 'app-weight-distribution',
  imports: [PieChart],
  templateUrl: './weight-distribution.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeightDistribution {
  private state = inject(GLOBAL_STATE);

  readonly weightStats = computed(() =>
    this.state.packlist
      .model()
      .map((category) => ({
        id: category.id,
        name: category.name,
        value: category.totalWeight / this.state.packlist.stats().totalWeight,
        color: colorFromString(category.id),
      }))
      .filter((category) => category.value > 0),
  );

  segmentClicked(category: { id: string }) {
    this.state.router.fragment.set(category.id);
  }
}
