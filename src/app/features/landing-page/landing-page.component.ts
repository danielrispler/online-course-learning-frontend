import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { CoursesComponent } from './courses-tab/courses-tab.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WhyUsComponent } from './why-us/why-us.component';


@Component({
  selector: 'app-landing-page',
  imports: [MatIconModule, CoursesComponent, WhyUsComponent, CommonQuestionsComponent, ReviewsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent { }
