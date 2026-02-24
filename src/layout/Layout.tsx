import { ReactNode } from "react";
import Header from "@/layout/header/Header";
import Footer from "./footer/Footer";

type LayoutProps = { children: ReactNode };
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="md:px[108px] px[70px]">{children}</div>
      <Footer />
    </>
  );
}
