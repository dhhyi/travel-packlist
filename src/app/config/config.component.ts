import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PacklistPersistence } from '../packlist/packlist.persistence';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.css',
})
export class ConfigComponent {
  packlist = inject(PacklistPersistence);
  router = inject(Router);

  resetChecklist() {
    if (window.confirm('Are you sure you want to reset the checklist?')) {
      this.packlist.saveAnswers({});
      this.packlist.setCheckedItems([]);
      this.router.navigate(['/packlist']);
    }
  }
}
