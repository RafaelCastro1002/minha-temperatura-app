import {
  Container,
  ContainerWeatherCards,
  WeatherCardInnerContainer,
  HourText,
  MainContentCard,
  TitlePage,
  WeatherCard,
  WeatherIcon,
  WeatherTemperature,
  WeatherText,
  ContainerWeatherCardAndBudgets,
  BudgetsContainer,
  BudgetWeather,
  BudgetIcon,
  BudgetText,
  LoadingImage,
  LoadingMessage,
  ShowLoadingContainer,
} from "./styles";
import WeatherService from "../../services/WeatherService";

import thermometerIcon from "../../assets/icons/thermometer.png";
import humidityIcon from "../../assets/icons/humidity.png";
import windIcon from "../../assets/icons/wind.png";
import uvIndexIcon from "../../assets/icons/ultraviolet.png";
import { useContext, useEffect, useState } from "react";
import ClimateConditionsModel from "../../models/ClimateConditionsModel";
import UserContext from "../../context/UserContext";
import { formatDateToHours } from "../../utils/date";
import {
  formatNumberWithTwoDigitsMinimum,
  formatTemperatureNumber,
} from "../../utils/number";
import LoadingImageSrc from "../../assets/images/loading.gif";

const weatherService = new WeatherService();

const HistoricalConditions = () => {
  const [historicalConditions, setHistoricalConditions] = useState<
    ClimateConditionsModel[] | []
  >([]);

  const { state } = useContext(UserContext);
  const { location } = state;

  useEffect(() => {
    const getHistoricalConditions = async () => {
      if (location.key && !location.pending) {
        const historicalConditionsResponse =
          await weatherService.getHistoricalCurrentConditions({
            locationKey: location.key,
          });

        setHistoricalConditions(historicalConditionsResponse);
      }
    };

    getHistoricalConditions();
  }, [location]);

  const renderHistorical = () => {
    return historicalConditions.map(
      (
        {
          weatherText,
          dateTime,
          weatherIconId,
          currentTemperature,
          temperatureUnit,
          realFeelTemperature,
          relativeHumidity,
          wind,
          speedUnit,
          uvIndexText,
        },
        index
      ) => {
        const formattedWeatherIconId =
          weatherIconId && formatNumberWithTwoDigitsMinimum(weatherIconId);

        const formattedTemperature = formatTemperatureNumber({
          temperature: currentTemperature,
          unit: temperatureUnit,
        });

        return (
          <ContainerWeatherCardAndBudgets key={index}>
            <WeatherCard>
              <WeatherCardInnerContainer>
                <HourText>
                  {formatDateToHours(dateTime as Date).toUpperCase()}
                </HourText>
              </WeatherCardInnerContainer>
              <MainContentCard>
                <WeatherIcon
                  src={`https://developer.accuweather.com/sites/default/files/${formattedWeatherIconId}-s.png`}
                />
                <WeatherText>{weatherText.toUpperCase()}</WeatherText>
                <WeatherTemperature>{formattedTemperature}</WeatherTemperature>
              </MainContentCard>
            </WeatherCard>

            <BudgetsContainer>
              <BudgetWeather>
                <BudgetIcon src={thermometerIcon} />
                <BudgetText>
                  {`Sensação térmica: 
                  ${formatTemperatureNumber({
                    temperature: realFeelTemperature,
                    unit: temperatureUnit,
                  })}`}
                </BudgetText>
              </BudgetWeather>
              <BudgetWeather>
                <BudgetIcon src={humidityIcon} />
                <BudgetText>
                  {`Umidade relativa: ${relativeHumidity}%`}
                </BudgetText>
              </BudgetWeather>
              <BudgetWeather>
                <BudgetIcon src={windIcon} />
                <BudgetText>
                  {`Velocidade do Vento: ${wind} ${speedUnit}`}
                </BudgetText>
              </BudgetWeather>
              <BudgetWeather>
                <BudgetIcon src={uvIndexIcon} />
                <BudgetText>{`Índice UV: ${uvIndexText}`}</BudgetText>
              </BudgetWeather>
            </BudgetsContainer>
          </ContainerWeatherCardAndBudgets>
        );
      }
    );
  };

  const renderLoading = () => {
    return (
      <ShowLoadingContainer>
        <LoadingImage src={LoadingImageSrc} />
        <LoadingMessage>Esperando localização</LoadingMessage>
      </ShowLoadingContainer>
    );
  };

  return (
    <Container>
      <TitlePage data-cy="title-page">Histórico das últimas 24 horas</TitlePage>
      {!historicalConditions.length && renderLoading()}
      <ContainerWeatherCards>{renderHistorical()}</ContainerWeatherCards>
    </Container>
  );
};

export default HistoricalConditions;
