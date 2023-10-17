export interface ProjectInterface {
  id: string;
  subject?: string;
  description?: string;
  createdBy?: string;
  startDate?: string | Date;
  endDate?: string | Date;
  cost?: number;
}
