import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    border-radius: 20px;
  }

  .links {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .link.active {
    color: ${({ theme: { colors } }) => colors.base};
    text-decoration: underline;
  }
`;

export default HeaderStyled;
