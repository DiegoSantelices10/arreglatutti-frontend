import { Toaster } from '@/components/ui/toaster';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen grid content-center">
      {children}
      <Toaster />
    </div>
  );
}
