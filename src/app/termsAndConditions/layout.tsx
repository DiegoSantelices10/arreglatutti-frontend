import Header from '@/components/Header';

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen grid content-between bg-white">
      <Header />
      {children}
    </div>
  );
}
