import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'augmented-reality',
    loadChildren: () => import('./pages/augmented-reality/augmented-reality.module').then( m => m.AugmentedRealityPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule) },
  // { path: 'augmented-reality', loadChildren: () => import('../pages/augmented-reality/augmented-reality.module').then( m => m.AugmentedRealityPageModule) },
  // { path: 'map', loadChildren: () => import('../pages/map/map.module').then( m => m.MapPageModule) }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
