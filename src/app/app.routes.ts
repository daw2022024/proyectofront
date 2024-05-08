import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'catalog',
        component: CatalogComponent
    },
    {
        path: 'catalog/:id',
        component: CatalogComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'category/:id',
        component: CategoryComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: 'subcategory/:id',
        component: ContainerComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    },
    {
        path:'**',
        redirectTo: '/error'
    }

];
