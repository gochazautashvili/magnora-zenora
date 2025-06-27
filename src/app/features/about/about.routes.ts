import { Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'about',
        loadComponent: () => import("./layout/layout.component")
        .then(m => m.LayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import("./views/about-main/about-main.component").then(m => m.AboutMainComponent)
            }
        ]
    }
];

export default routes;