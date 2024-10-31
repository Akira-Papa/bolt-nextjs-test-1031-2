export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mx-auto max-w-4xl">
        {children}
      </div>
    </div>
  );
}