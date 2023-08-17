import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => (
  <>
    <Header />
    <main className="m-5">
      <Outlet />
    </main>
    <Footer />
  </>
)