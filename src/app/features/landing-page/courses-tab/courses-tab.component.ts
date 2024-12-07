import { ChangeDetectionStrategy, Component, resource, ResourceStatus } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { CourseDetails } from '@shared/course/course.type';
import { COURSES_URL } from 'src/app.config';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-tab.component.html',
  styleUrls: ['./courses-tab.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatExpansionModule, MatGridListModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesComponent {
  protected readonly status = ResourceStatus;
  protected readonly courses = resource({
    loader: async (): Promise<CourseDetails[]> => {
      const res = await fetch(COURSES_URL);
      return res.json();
    },
  }); 
}
