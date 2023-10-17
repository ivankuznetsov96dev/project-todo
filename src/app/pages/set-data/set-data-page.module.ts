import { NgModule } from '@angular/core';
import { SetDataPageComponent } from './set-data-page.component';
import { SetDataPageRoutingModule } from './set-data-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { JSONHandlerService } from './services/json-handler.service';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [SetDataPageRoutingModule, ReactiveFormsModule, MatInputModule, ButtonComponent, CommonModule],
  declarations: [SetDataPageComponent],
  providers: [JSONHandlerService]
})

export class SetDataPageModule {}
