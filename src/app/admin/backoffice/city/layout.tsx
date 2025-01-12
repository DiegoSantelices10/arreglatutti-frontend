import { Toaster } from '@/components/ui/toaster';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="bg-white mx-auto">
      <Toaster />
      {children}
    </main>
  );
}
