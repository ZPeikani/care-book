import { ReactNode } from "react";
import Header from "@/layout/header/Header";
import Footer from "./footer/Footer";

type LayoutProps = { children: ReactNode };
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="md:px-20 px-10">{children}</div>
      <Footer />
    </>
  );
}
