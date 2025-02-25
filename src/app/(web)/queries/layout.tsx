import Header from '@/components/Profession/Header';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen grid bg-[#FAFAFB]">
      <Header />
      {children}
      <Toaster />
    </div>
  );
}
