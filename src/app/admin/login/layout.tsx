import Sidebar from "@/components/custom/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main>
            <Toaster />
            {children}
        </main>
    );
}
