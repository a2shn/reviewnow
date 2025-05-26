export function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-background min-h-svh">{children}</div>;
}

export function PageCentered({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      {children}
    </div>
  );
}
