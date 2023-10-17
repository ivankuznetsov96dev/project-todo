import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetDataPageComponent } from './set-data-page.component';

const routes: Routes = [
  {
    path: '',
    component: SetDataPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetDataPageRoutingModule {}
