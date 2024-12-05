import { Component, resource, ResourceStatus } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { WHY_US_DATA } from './why-us.utils';

@Component({
  selector: 'app-why-us',
  imports: [MatIcon],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  whyUsDataArray = WHY_US_DATA;
}
