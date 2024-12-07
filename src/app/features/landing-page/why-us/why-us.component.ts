import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BENEFITS_DATA } from './why-us.utils';

@Component({
  selector: 'app-why-us',
  imports: [MatIconModule, MatCardModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  protected readonly benefits = BENEFITS_DATA;
}
