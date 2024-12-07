import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { COMMON_QUESTIONS_DATA } from './common-questions.utils';

@Component({
  selector: 'app-common-questions',
  imports: [MatExpansionModule],
  templateUrl: './common-questions.component.html',
  styleUrl: './common-questions.component.scss'
})
export class CommonQuestionsComponent {
  protected readonly panelOpenState = signal(false);
  protected readonly commonQuestionsData = COMMON_QUESTIONS_DATA;
}
