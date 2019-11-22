import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddressesPage } from './pages/addresses/addresses.page';
import { AngularInfoComponent } from './pages/angular-info/angular-info.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/addresses', pathMatch: 'full' },
    { path: 'addresses', component: AddressesPage },
    { path: 'angular', component: AngularInfoComponent },
    { path: '**', component: PageNotFoundComponent }
];
