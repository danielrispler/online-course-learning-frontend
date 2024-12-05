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
    {
        path: 'gamaCyber',
        loadComponent: () => 
            import('./features/gama-cyber-page/gama-cyber-page.component').then(m => m.GamaCyberPageComponent)
    },
    {
        path: 'computerSubjects',
        loadComponent: () => 
            import('./features/computer-subject-page/computer-subject-page.component').then(m => m.ComputerSubjectPageComponent)
    }
];
