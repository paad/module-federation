import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/page-a',
    pathMatch: 'full'
  },
  {
    path: 'page-a',
    loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'pageA',
          exposedModule: './Module'
        }).then(m => m.SharedModule)
  },
  {
    path: 'page-b',
    loadChildren: () =>
        loadRemoteModule({
          remoteEntry: 'http://localhost:3001/remoteEntry.js',
          remoteName: 'pageB',
          exposedModule: './Module'
        }).then(m => m.SharedModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
