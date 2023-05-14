import { Outlet } from "react-router";
import Header from "../Header/Header";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <LayoutStyled>
        <Outlet />
      </LayoutStyled>
    </>
  );
};

export default Layout;
