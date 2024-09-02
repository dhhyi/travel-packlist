import { Component, computed, input } from '@angular/core';
import { Item } from '../../../model/types';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  items = input<Item[]>([])

  groupedItems = computed(() =>
    Object.entries(
      this.items().reduce((groups, item) => {
        if (!groups[item.category]) {
          groups[item.category] = []
        }
        groups[item.category].push(item)
        return groups
      }, {} as Record<string, Item[]>)
    )
  )
}
