export default function SinglePostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="container mx-auto min-h-dvh">{children}</section>;
}
