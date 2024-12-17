import Sidebar from "@/components/custom/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";


export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <SidebarProvider>
            <Sidebar />
            <main className="bg-white w-full">
                <div className="bg-primary p-2">
                    <SidebarTrigger />
                </div>
                <div className="p-4">
                    {children}
                </div>
            </main>
            <Toaster />
        </SidebarProvider>
    );
}
