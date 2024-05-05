import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
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
    }

];
