
"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/types/project";

const STORAGE_KEY = "taskflow-projects";

const DEFAULT_PROJECTS: Project[] = [
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
];

function isProject(value: unknown): value is Project {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value)
  ) {
    return false;
  }

  const project = value as Record<string, unknown>;

  return (
    typeof project.id === "number" &&
    Number.isFinite(project.id) &&
    typeof project.name === "string" &&
    typeof project.description === "string" &&
    (
      project.status === "Planning" ||
      project.status === "In Progress" ||
      project.status === "Completed" ||
      project.status === "Cancelled"
    )
  );
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try {
        const savedProjects = localStorage.getItem(STORAGE_KEY);

        if (savedProjects !== null) {
          const parsedProjects: unknown = JSON.parse(savedProjects);

          if (Array.isArray(parsedProjects)) {
            setProjects(parsedProjects as Project[]);
          }
        }
      } catch {
        // Keep default projects if saved data is invalid.
      }

      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects, isLoaded]);

  return { projects, setProjects };
}
