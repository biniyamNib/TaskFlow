
export type ProjectStatus =
  | "Planning"
  | "In Progress"
  | "Completed"
  | "Cancelled";

export type Project = {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
};

export type CreateProjectInput = Omit<Project, "id">;
