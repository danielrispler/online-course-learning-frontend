import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonQuestionsComponent } from './common-questions/common-questions.component';
import { CoursesComponent } from './courses-tab/courses-tab.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { GeneralInfoComponent } from './general-info/general-info.component';


@Component({
  selector: 'app-landing-page',
  imports: [CoursesComponent, WhyUsComponent, CommonQuestionsComponent, ReviewsComponent, GeneralInfoComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent { }
