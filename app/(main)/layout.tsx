import { Contact } from "@/components/sections/Contact";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function shopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingNav />
      <main className="flex-grow pt-4"> {/* pt-20 adds space for the fixed navbar */}
        {children}
      </main>
      <Contact />
    </div>
  );
}