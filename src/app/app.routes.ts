import { Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { HomeComponent } from './components/layout/home/home.component';
import { DetailsComponent } from './components/products_folder/details/details.component';
import { ProductsComponent } from './components/products_folder/products/products.component';

export const routes: Routes = [
    {
        path: '', component: BodyComponent, children: [
            {
                path: '', component: HomeComponent, pathMatch: 'full'
            },
            {
                path: 'coffee', component: ProductsComponent, data: {navigation_data: 'Coffee'}, children: [
                    {
                        path: 'details/:id', component: DetailsComponent,
                    },
                ]
            },
            {
                path: 'sweets', component: ProductsComponent, data: {navigation_data: 'Sweets'}, children: [
                    {
                        path: 'details/:id', component: DetailsComponent,
                    },
                ]
            },
            {
                path: 'coldDrinks', component: ProductsComponent, data: {navigation_data: 'Cold Drinks'}, children: [
                    {
                        path: 'details/:id', component: DetailsComponent,
                    },
                ]
            },
            {
                path: 'food', component: ProductsComponent, data: {navigation_data: 'Food'}, children: [
                    {
                        path: 'details/:id', component: DetailsComponent,
                    },
                ]
            },
            {
                path: 'alco', component: ProductsComponent, data: {navigation_data: 'Alco'}, children: [
                    {
                        path: 'details/:id', component: DetailsComponent,
                    },
                ]
            },
            {
                path: 'coffeeBean', component: ProductsComponent, data: {navigation_data: 'Coffee Bean'}, children: [
                    {
                        path: 'details/:id', component: DetailsComponent,
                    },
                ]
            },
            {
                path: '**', redirectTo: ''
            }

        ]

    }
];
