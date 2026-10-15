import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge} from "@/components/ui/card";

type ProjectCardProps = {
  name: string;
  description: string;
  status: string;
};


export default function ProjectCard({
  name,
  description,
  status,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <p>{status}</p>
      </CardContent>
    </Card>
  );
}
