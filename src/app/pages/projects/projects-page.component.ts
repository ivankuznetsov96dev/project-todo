import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectInterface } from 'src/app/shared/models/project.interface';
import { StorageService } from 'src/app/shared/services/storage.service';
import * as moment from 'moment';
import { ChangeProjectInfoService } from './services/change-project-info.service';

@Component({
  selector: 'app-pajes-component',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent implements OnInit {

  public isChanging: boolean = false;
  public choosedProject: ProjectInterface | null = null;
  public projects!: ProjectInterface[];
  public form!: FormGroup;


  constructor(
    private cdr: ChangeDetectorRef,
    private storage: StorageService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private chageProjectInfo: ChangeProjectInfoService
    ) {}

  ngOnInit(): void {
    this.initProjectData();
  }

  public chooseProject(id: string): void {
    this.router.navigate([`/pages/projects/${id}`]);
    this.choosedProject = this.projects.find(project => project.id === id) ?? null;
  }

  public changeProjectInfo(): void {
    this.form = this.fb.group({
      subject: [this.choosedProject!.subject, []],
      startDate: [moment(this.choosedProject!.startDate).toDate(), []],
      endDate: [moment(this.choosedProject!.endDate).toDate(), []],
      createdBy: [this.choosedProject!.createdBy, []],
      description: [this.choosedProject!.description, []],
      cost: [this.choosedProject!.cost, []],
    });
    this.isChanging = !this.isChanging;
  }

  public onChangeData(): void {
    this.chageProjectInfo.changeProjectInfo({...this.form.value, id: this.choosedProject!.id});
    this.initProjectData();
    this.isChanging = !this.isChanging;
  }

  public trackById(index: number, project: ProjectInterface): string {
    return project.id
  }

  private initProjectData(): void {
    this.projects = JSON.parse(this.storage.getLocalStorageProp('projects') ?? '[]');
    if (this.route.snapshot.params['projectId']) {
      this.choosedProject = this.projects.find(project => project.id === this.route.snapshot.params['projectId']) ?? null;
    }
  }
}
