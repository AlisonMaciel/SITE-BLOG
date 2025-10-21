import CallToAction from "../Call-To-Action";
import Footer from "../Footer";
import Header from "../Header";

type LayoutDefaultProps = {
  children: React.ReactNode;
  className: string;
};

export function LayoutDefault({ children }: LayoutDefaultProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#101216]">
      <Header />
      <main className="flex-1">{children}</main>
      <CallToAction />
      <Footer />
    </div>
  );
}
