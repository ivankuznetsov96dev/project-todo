import { NgModule } from '@angular/core';
import { ProjectsPageRoutingModule } from './projects-page-routing.module';
import { ProjectsPageComponent } from './projects-page.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { DateWithStringPipe } from 'src/app/shared/pipes/date-with-string.pipe';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChangeProjectInfoService } from './services/change-project-info.service';


@NgModule({
  imports: [
    ProjectsPageRoutingModule,
    CommonModule,
    MatCardModule,
    DateWithStringPipe,
    ButtonComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [ProjectsPageComponent],
  providers: [MatDatepickerModule, ChangeProjectInfoService]
})

export class ProjectsPageModule {}
