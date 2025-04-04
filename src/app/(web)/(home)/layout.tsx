import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const { isLoggedIn } = await getSession();
  return (
    <div className="min-h-screen grid content-between">
      <Header />
      {children}
      <Toaster />
      <Footer />
    </div>
  );
}
