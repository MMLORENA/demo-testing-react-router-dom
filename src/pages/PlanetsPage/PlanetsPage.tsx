import { Link } from "react-router-dom";
import PageStyled from "../PageStyled";

const PlanetsPage = (): JSX.Element => {
  return (
    <PageStyled>
      <h1 className="main-title">My Planets 🪐 </h1>
      <ul className="planets">
        <li className="planet">
          <Link to="/planet/1">
            <h2 className="planet__title">Venus</h2>
          </Link>
        </li>
        <li className="planet">
          <Link to="/planet/2">
            <h2 className="planet__title">Jupiter</h2>
          </Link>
        </li>
      </ul>
    </PageStyled>
  );
};

export default PlanetsPage;
