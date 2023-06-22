import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
  padding: 2em 3em;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 10em;
  height: 2em;
  text-align: left;
  padding-left: 1em;
`;

export const LogoSubtitle = styled.p`
  font-family: "bold italic";
  font-size: 0.9em;
  color: ${(props) => props.theme.colors.red};
  margin: 0;
`;

export const LogoTitle = styled.p`
  font-family: "bold italic";
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.red};
  margin-top: -0.3em;
  margin-left: -1em;
`;

export const RoutesContainer = styled.div`
  margin-left: auto;
  padding: 0 10em 0 0em;
  text-align: left;
`;

type RouterOptionsParams = {
  isSelectRouter?: boolean;
};

export const RoutesOptions = styled.a<RouterOptionsParams>`
  text-decoration: none;
  color: ${(props) =>
    props.isSelectRouter === true
      ? props.theme.colors.red
      : props.theme.colors.black};
  font-family: "bold";
  font-size: 0.75em;
  margin: 0 1.3em;
  letter-spacing: 0.15em;
  cursor: pointer;
  opacity: 0.85;

  :hover {
    color: ${(props) => props.theme.colors.celestialBlue};
  }
`;
