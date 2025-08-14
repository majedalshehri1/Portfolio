export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Site-specific layout components can go here */}
      {children}
    </div>
  );
}
