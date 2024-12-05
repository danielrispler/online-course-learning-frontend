import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { CoursesComponent } from './courses-tab/courses-tab.component';


@Component({
  selector: 'app-landing-page',
  imports: [MatIconModule, MatExpansionModule, CoursesComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  protected readonly panelOpenState = signal(false);
}
