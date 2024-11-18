import {
  Component,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconCogComponent } from './icons/icon-cog/icon-cog.component';
import { IconUpComponent } from './icons/icon-up/icon-up.component';
import { NgOptimizedImage } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    IconCogComponent,
    IconUpComponent,
    NgOptimizedImage,
    DialogComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.scrollTopVisible = window.scrollY > 100;
  }

  scrollTopVisible = false;
}
