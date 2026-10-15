import Link from "next/link";
export default function AppSidebar() {
    return (
        <aside className="w-64 bg-slate-900 p-4 text-white">
            <p className="mb-6 text-xl font-bold">TaskFlow</p>
            <nav className="space-y-2">
                <Link href={"/"} className="block rounded-md p-3 hover:bg-slate-800">Dashboard</Link>
                <Link href={"/projects"} className="block rounded-md p-3 hover:bg-slate-800">Projects</Link>
                <Link href={"/tasks"} className="block rounded-md p-3 hover:bg-slate-800">Tasks</Link>
                <Link href={"/settings"} className="block rounded-md p-3 hover:bg-slate-800">Settings</Link>
            </nav>
        </aside>
    );
}