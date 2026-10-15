import StatCard from "@/components/dashboard/stat-card";

export default function Home() {
  return (
    <main>
      <h1>TaskFlow Dashboard</h1>
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
    </main>
  );
}
