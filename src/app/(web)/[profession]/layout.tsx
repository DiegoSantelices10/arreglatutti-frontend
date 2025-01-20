import Footer from '@/components/Footer';
import Header from '@/components/Profession/Header';
import { Toaster } from '@/components/ui/toaster';

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen grid content-center">
      <Header />
      {children}
      <Toaster />
      <Footer />
    </div>
  );
}
