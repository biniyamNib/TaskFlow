"use client";

import { useState } from "react";
import StatCard from "@/components/dashboard/stat-card";
import AppSidebar from "@/components/layout/app-sidebar";
import AppHeader from "@/components/layout/app-header";
import { Input } from "@/components/ui/input";
import CreateProjectDialog from "@/components/dashboard/create-project-dialog";
import ProjectCard, {
  type ProjectStatus,
} from "@/components/dashboard/project-card";

export default function Home() {
  const [projects, setProjects] = useState<
    {
      id: number;
      name: string;
      description: string;
      status: ProjectStatus;
    }[]
  >([
    {
      id: 1,
      name: "Website Redesign",
      description: "Redesign the company website",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Mobile App",
      description: "Build the mobile application",
      status: "Planning",
    },
    {
      id: 3,
      name: "Payment Integration",
      description: "Integrate the payment gateway",
      status: "Completed",
    },
    {
      id: 4,
      name: "Web Design",
      description: "Design a new website",
      status: "Planning",
    },
  ]);

  const totalProjects = projects.length;
  const inProgressProjects = projects.filter(
    (project) => project.status === "In Progress",
  );
  const inProgressCount = inProgressProjects.length;

  const compltedProjects = projects.filter(
    (project) => project.status === "Completed",
  );
  const compltedCount = compltedProjects.length;

  const planningProjects = projects.filter(
    (project) => project.status === "Planning",
  );
  const planningCount = planningProjects.length;

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (statusFilter === "All" || project.status === statusFilter)
  );

  const [projectToDelete, setProjectToDelete] = useState<number | null>(null);

  function handleCreateProject(newProject: {
    name: string;
    description: string;
    status: ProjectStatus;
  }) {
    setProjects((currentProjects) => [
      ...currentProjects,
      {
        id: Date.now(),
        ...newProject,
      },
    ]);
  }

  function handleEditProject(id: number) {
    console.log("Edit project:", id);
  }

  function handleDeleteProject(id: number) {
    // setProjects((currentProjects) => 
    //     currentProjects.filter((project) => project.id !== id)
    // );
    setProjectToDelete(id);
  }

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 space-y-6 p-6">
        <AppHeader />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Tasks"
            value={totalProjects}
            description="Across all projects"
          />
          <StatCard
            title="In Progress"
            value={inProgressCount}
            description="Currently active"
          />
          <StatCard
            title="Completed"
            value={compltedCount}
            description="Finished tasks"
          />
          <StatCard
            title="Planning"
            value={planningCount}
            description="Projects awaiting work"
          />
        </div>
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Projects</h2>
            <CreateProjectDialog onCreate={handleCreateProject} />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="w-full sm:max-w-md sm:flex-1">
              <Input
                placeholder="Search projects by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 rounded-lg border-slate-200 bg-white shadow-sm transition-shadow focus-visible:ring-2"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm shadow-sm outline-none transition-colors focus:ring-2 focus:ring-slate-400 sm:w-48"
            >
              <option value="All">All Statuses</option>
              <option value="Planning">Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                status={project.status}
                onEdit={() => handleEditProject(project.id)}
                onDelete={() => handleDeleteProject(project.id)}
              />
            )) : 
            <div className="col-span-full rounded-lg border border-dashed p-10 text-center">
              <h3 className="text-lg font-semibold">No projects fouund</h3>
              <p className="mt-2 text-sm text-slate-500">
                Try adjusting your search or status filter.
              </p>
            </div>
            }
          </div>
        </section>
      </main>
    </div>
  );
}
