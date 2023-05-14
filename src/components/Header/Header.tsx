import { NavLink } from "react-router-dom";
import paths from "../../routers/paths";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="/media/logo.jpg"
        alt="Solar System"
        className="logo"
        height="75"
        width="75"
      />
      <nav className="navigation">
        <ul className="links">
          <li>
            <NavLink to={paths.planets} className="link">
              Planets
            </NavLink>
          </li>
          <li>
            <NavLink to={paths.create} className="link">
              Create
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
