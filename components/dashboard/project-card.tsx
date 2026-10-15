import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectStatus = "In Progress" | "Planning" | "Completed" | "Cancelled";

type ProjectCardProps = {
  name: string;
  description: string;
  status: ProjectStatus;
};

export default function ProjectCard({
  name,
  description,
  status,
}: ProjectCardProps) {
  const statusVariants = {
    "In Progress": "default",
    Planning: "secondary",
    Completed: "outline",
    Cancelled: "destructive",
  } satisfies Record<
    ProjectStatus,
    "default" | "secondary" | "outline" | "destructive"
  >;

  const statusVariant = statusVariants[status];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <Badge variant={statusVariant}>{status}</Badge>
      </CardContent>
    </Card>
  );
}
