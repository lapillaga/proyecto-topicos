import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'predefined-query',
        loadChildren: () => import('./predefined-query/predefined-query.module').then(m => m.PredefinedQueryModule)
      },
      {
        path: 'create-query',
        loadChildren: () => import('./create-query/create-query.module').then(m => m.CreateQueryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
