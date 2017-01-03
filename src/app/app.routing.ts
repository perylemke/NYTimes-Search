import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { SearchComponent } from './search/search.component';

// Create routes
const appRoutes: Routes = [
{ path: 'search', pathMatch: 'full', component: SearchComponent }
];

// Export routing
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
