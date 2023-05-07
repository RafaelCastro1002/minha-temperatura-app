import styled from "styled-components";
import polygonImage from "../../assets/images/polygon.svg";

export const Container = styled.div`
  width: 50vw;
  margin: 3em auto;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 2em;
  border-radius: 8px;
`;

export const TitlePage = styled.span`
  font-family: "bold";
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.black};
`;

export const ContainerWeatherCards = styled.div`
  margin-top: 2em;
  padding: 0 0.5em;
`;

export const ContainerWeatherCardAndBudgets = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
  background-color: ${({ theme }) => theme.colors.celestialBlue};
  border-radius: 5px;
`;

export const WeatherCard = styled.div`
  display: flex;
  align-items: center;
  height: 2.5em;
  width: auto;
  padding: 0;
  margin: 0 0 0.3em;
  background-color: ${({ theme }) => theme.colors.blue};
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

export const WeatherCardInnerContainer = styled.div`
  width: 5em;
  margin-right: -2.5em;
  padding: 0 0 0 1.5em;
`;

export const MainContentCard = styled.div`
  margin: 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 4em;
  padding-right: 1.5em;
  mask: url(${polygonImage}) no-repeat right;
  mask-size: 100%;
  background-color: ${({ theme }) => theme.colors.celestialBlue};
  border-top-right-radius: 4px;
`;

export const HourText = styled.p`
  margin-right: 2em;
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: "bold italic";
  font-size: 0.9em;
`;

export const WeatherIcon = styled.img`
  width: 4em;
  height: 2.5em;
  margin-left: -1em;
  margin-top: 0.3em;
`;

export const WeatherText = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: "bold";
  font-size: 0.9em;
`;

export const WeatherTemperature = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: "bold";
  font-size: 1.2em;
  margin-left: auto;
`;

export const BudgetsContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: space-evenly;
  /* flex-wrap: wrap; */
  /* gap: 0.2em; */
`;

export const BudgetWeather = styled.div`
  border-radius: 4px;
  width: auto;
  /* background-color: ${({ theme }) => theme.colors.blue}; */
  display: flex;
  padding: 0.3em;
  width: auto;
`;

export const BudgetIcon = styled.img`
  width: 1em;
  height: 1em;
  margin-right: 0.3em;
`;

export const BudgetText = styled.span`
  color: ${({ theme }) => theme.colors.lightGray};
  font-family: "bold";
  font-size: 0.7em;
`;

export const ShowLoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7em;
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
