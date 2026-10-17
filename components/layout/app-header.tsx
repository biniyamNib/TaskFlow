import { Button } from "@/components/ui/button";
import CreateProjectDialog from "../dashboard/create-project-dialog";
export default function AppHeader() {
    return (
    <header className="flex items-center justify-between border-b bg-white p-6">
        <div>
            <h1 className="mb-6 text-xl font-bold">Dashboard</h1>
            <p>Welcome back! Here's your overview.</p>
        </div>
    </header>
    );
}