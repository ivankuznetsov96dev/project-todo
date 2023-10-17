import { Injectable } from "@angular/core";
import { ProjectInterface } from "src/app/shared/models/project.interface";
import { StorageService } from "src/app/shared/services/storage.service";

@Injectable()
export class JSONHandlerService {

  constructor(private storage: StorageService) {}

  public checkJSONStruct(data: string): boolean {
    try {
      let isCorrect = true;
      const parsedJson = this.parseData(data);
      if ('Projects' in parsedJson) {
        for (const item of parsedJson["Projects"]) {
          if (!this.checkId(item)) {
            isCorrect = false;
            break;
          }
        }
      } else {
        isCorrect = this.checkId(parsedJson);
      }
      return isCorrect

    } catch (error) {
      return false;
    }
  }

  public setJSONData(data: string): void {
    const parsedJson = this.parseData(data);
    const projectsState: ProjectInterface[] = JSON.parse(this.storage.getLocalStorageProp('projects') ?? '[]');
    this.updateProjectsState(parsedJson, projectsState);
    this.storage.setLocalStorageProp('projects', JSON.stringify(projectsState));
  }

  public checkIfObjectExists(data: string): boolean {
    const parsedJson = this.parseData(data);
    const projectsState: ProjectInterface[] = JSON.parse(this.storage.getLocalStorageProp('projects') ?? '[]');
    if ('Projects' in parsedJson) {
        return projectsState.some((savedObj: ProjectInterface) => parsedJson['Projects'].some(newObj => newObj.id === savedObj.id));
    } else {
        return projectsState.some((savedObj: ProjectInterface) => savedObj.id === parsedJson.id);
    }
  }

  private updateProjectsState(
    parsedJson: ProjectInterface | {Projects: ProjectInterface[]},
    projectsState: ProjectInterface[]
    ): void {
    if ('Projects' in parsedJson) {
        projectsState.push(...parsedJson['Projects']);
    } else {
        projectsState.push(parsedJson);
    }
  }

  private parseData(data: string):  ProjectInterface | { "Projects": ProjectInterface[]} {
    return JSON.parse(data);
  }

  private checkId(object: ProjectInterface | { "Projects": ProjectInterface[] }): boolean {
    return 'id' in object;
  }
}
