import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  width: 8em;
  height: 12em;
  border-radius: 18px;
  padding: 2.5em;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

export const TitleDay = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "bold";
  font-size: 1.1em;
  margin: 0;
  margin-right: auto;
`;

export const TitleDate = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "light";
  font-size: 0.85em;
  margin: 0;
`;

export const ClimateConditionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  margin: 0 auto;
  margin-top: 2.4em;
  height: 7em;
  width: 100%;
`;

export const ClimateConditionsFromPeriod = styled.div`
  background-color: ${(props) => props.theme.colors.lightGray};
  /* width: 90%; */
  height: 100%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PeriodTitleClimateConditions = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "bold italic";
  font-size: 0.7em;
  margin: 0;
  margin-bottom: 1em;
  width: 100%;
  text-align: left;
`;

export const WeatherIcon = styled.img`
  width: 3.8em;
  height: 2.3em;
`;

export const TextDescriptionClimateConditions = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "italic";
  font-size: 0.75em;
  margin: 0;
  margin-top: 0.8em;
  text-align: center;
  width: 90%;
  height: 100%;
  overflow-wrap: break-word;
  hyphens: auto;
`;

export const TemperatureRangeContainer = styled.div`
  height: 90%;
  /* width: 10%; */
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  margin-left: 1em;
`;

export const TemperatureValue = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "bold italic";
  font-size: 0.9em;
`;
