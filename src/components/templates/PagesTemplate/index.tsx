import Header from "@/components/organisms/Header";
import { Outlet } from "react-router";
import { StyledMain } from "./styles";

export default function PagesTemplate() {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
}
