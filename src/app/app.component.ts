import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private metaService: Meta) {}
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Set meta description based on the current route
        const description = this.getDescriptionForRoute(event.urlAfterRedirects);
        this.metaService.updateTag({ name: 'description', content: description });
      }
    });
  }

  private getDescriptionForRoute(url: string): string {
    switch (url) {
      case '/':
        return 'Welcome to our site!';
      case '/about':
        return 'Learn more about our company.';
      case '/contact':
        return 'Contact us for more information.';
      default:
        return 'Welcome to our site!';
    }
  }
}
