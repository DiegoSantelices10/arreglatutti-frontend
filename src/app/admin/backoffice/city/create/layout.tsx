export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="bg-white">{children}</main>;
}
