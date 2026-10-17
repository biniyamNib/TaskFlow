import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type ProjectStatus =
  | "In Progress"
  | "Planning"
  | "Completed"
  | "Cancelled";

type ProjectCardProps = {
  name: string;
  description: string;
  status: ProjectStatus;
  onEdit: () => void;
  onDelete: () => void;
};

export default function ProjectCard({
  name,
  description,
  status,
  onEdit,
  onDelete,
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
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={onEdit}>
            Edit
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
