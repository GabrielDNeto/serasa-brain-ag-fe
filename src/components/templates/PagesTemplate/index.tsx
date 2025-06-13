import Header from "@/components/organisms/Header";
import { Outlet } from "react-router";

export default function PagesTemplate() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
