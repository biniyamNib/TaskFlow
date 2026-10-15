import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CreateProjectDialog() {
  const [open, setOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [descritpion, setDescritpion] = useState("");
  const [status, setStatus] = useState("Planning");


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Create Project</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Project</DialogTitle>
          <DialogDescription>
            Enter the details for your new project.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="project-name">Project Name</label>
            <Input id="project-name" placeholder="Website Redesign" />
          </div>
          <div className="space-y-2">
            <label htmlFor="description">Description</label>
            <Textarea
              id="description"
              placeholder="Redesign the company website"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              defaultValue="Planning"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
            >
              <option>Planning</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
