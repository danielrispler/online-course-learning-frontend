import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./features/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'about',
        loadComponent: () => 
            import('./features/about-page/about-page.component').then(m => m.AboutPageComponent)
    },
];
