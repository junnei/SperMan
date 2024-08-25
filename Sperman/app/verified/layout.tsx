export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-between h-full">
      <div className="inline-block max-w-lg text-left justify-between h-full">
        {children}
      </div>
    </section>
  );
}
