import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: 18px;
  padding: 2em;
  width: 25%;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

export const ContainerTitleCard = styled.div`
  height: 2em;
  width: 8em;
  margin: 0;
  color: ${(props) => props.theme.colors.black};
`;

export const SubtitleCard = styled.p`
  font-size: 0.7em;
  font-family: "light";
  line-height: 0.01em;
`;

export const TitleCard = styled.p`
  font-size: 1.5em;
  font-family: "bold italic";
  line-height: 0.01em;
  color: ${(props) => props.theme.colors.celestialBlue};
`;

export const ContentCard = styled.div`
  width: 100%;
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WeatherIconImg = styled.img`
  width: 8em;
`;

export const WeatherTemperature = styled.p`
  margin: 0;
  font-family: "bold";
  color: ${(props) => props.theme.colors.black};
  font-size: 2.3em;
  text-align: center;
`;

export const DescriptionSky = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 0.9em;
  font-family: "light";
  line-height: 1em;
  text-align: center;
  margin: 0;
`;

export const ShowLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoadingImage = styled.img`
  width: 4em;
  height: 4em;
`;

export const LoadingMessage = styled.p`
  font-size: 0.8em;
  font-family: "italic";
  color: ${(props) => props.theme.colors.black};
`;
