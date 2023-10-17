import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'set-data', pathMatch: 'full' },
  { path: 'set-data', loadChildren:() => import('./set-data/set-data-page.module').then((m) => m.SetDataPageModule) },
  { path: 'projects', loadChildren:() => import('./projects/projects-page.module').then((m) => m.ProjectsPageModule) },
  { path: '**', redirectTo: 'set-data' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
