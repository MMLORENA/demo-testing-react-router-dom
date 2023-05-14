import { useParams } from "react-router";
import PageStyled from "../PageStyled";
const PlanetDetailPage = (): JSX.Element => {
  const { id } = useParams();

  return (
    <PageStyled>
      <h1 className="main-title">{`Planet id: ${id}  🪐`}</h1>
    </PageStyled>
  );
};

export default PlanetDetailPage;
