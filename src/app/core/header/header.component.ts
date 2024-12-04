import { Component } from '@angular/core';
import { environment } from '../../enviroments/enviroments';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected title = environment.appName;
}
