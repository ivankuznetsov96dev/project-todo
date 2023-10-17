import { ProjectInterface } from "./project.interface";

export interface ProjectFormInterface extends Omit<ProjectInterface, "id"> {}
