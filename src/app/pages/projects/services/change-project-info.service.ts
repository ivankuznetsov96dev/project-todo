import { Injectable } from "@angular/core";
import { ProjectInterface } from "src/app/shared/models/project.interface";
import { StorageService } from "src/app/shared/services/storage.service";

@Injectable()
export class ChangeProjectInfoService {
  constructor(private storage: StorageService) {}

  public changeProjectInfo(data: ProjectInterface): void {
    const projectsState: ProjectInterface[] = JSON.parse(this.storage.getLocalStorageProp('projects') ?? '[]');
    const indexToUpdate = projectsState.findIndex(project => project.id === data.id);
    if (indexToUpdate !== -1) {
      projectsState.splice(indexToUpdate, 1, data)
    }
    this.storage.setLocalStorageProp('projects', JSON.stringify(projectsState))
  }
}
