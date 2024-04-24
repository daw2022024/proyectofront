import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

export const routes: Routes = [
    { 
        path: 'home', 
        component: ContainerComponent 
    },
    {
        path: 'catalog',
        component:ContainerComponent
    },
    {
        path: 'category',
        component:ContainerComponent
    },
    {
        path: 'category/:id',
        component:ContainerComponent
    },
    {
        path: 'product/:id',
        component:ContainerComponent
    },
    {
        path: 'subcategory/:id',
        component:ContainerComponent
    }
    
];
