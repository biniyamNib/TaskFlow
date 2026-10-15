import StatCard from "@/components/dashboard/stat-card";
import AppSidebar from "@/components/layout/app-sidebar";
import AppHeader from "@/components/layout/app-header";
import ProjectCard from "@/components/dashboard/project-card";

const projects = [
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
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="flex-1 space-y-6 p-6">
        <AppHeader />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard
            title="Total Tasks"
            value={24}
            description="Across all projects"
          />
          <StatCard
            title="In Progress"
            value={8}
            description="Currently active"
          />
          <StatCard title="Completed" value={16} description="Finished tasks" />
        </div>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description={project.description}
                status={project.status}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
