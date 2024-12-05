import { Component, resource, ResourceStatus } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { CourseDetails } from '@shared/course/course.type';

@Component({
  selector: 'app-courses',
  templateUrl: './courses-tab.component.html',
  styleUrls: ['./courses-tab.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatExpansionModule, MatGridListModule, RouterLink],
})
export class CoursesComponent {
  protected readonly status = ResourceStatus;
  protected readonly courses = resource({
    loader: async (): Promise<CourseDetails[]> => {
      console.log("testttt")
      const res = await fetch('http://localhost:3000/courses');
      return res.json();
    },
  }); 

  viewDetails(courseId: string) {
    console.log(`View details for course: ${courseId}`);
    // Add your navigation or action logic here
  }
}
