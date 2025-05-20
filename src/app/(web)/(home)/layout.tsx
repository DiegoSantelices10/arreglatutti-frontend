import CookiesForm from '@/components/CookiesForm';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from '@/components/ui/toaster';

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // const { isLoggedIn } = await getSession();
  return (
    <div>
      <Header />
      {children}
      <CookiesForm />
      <Toaster />
      <Footer />
    </div>
  );
}
