import { Toaster } from '@/components/ui/toaster';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-gray-100">
      {children}
      <Toaster />
    </div>
  );
}
