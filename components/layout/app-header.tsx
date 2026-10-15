import { Button } from "@/components/ui/button";
export default function AppHeader() {
    return (
    <header className="flex items-center justify-between border-b bg-white p-6">
        <div>
            <h1 className="mb-6 text-xl font-bold">TaskFlow</h1>
            <p>Welcome back! Here's your overview.</p>
        </div>
        <Button>Create Task</Button>
    </header>
    );
}