import { useContext, useEffect, useState } from "react";
import WeatherNowCard from "../../components/ WeatherNowCard";
import {
  BudgetsContainer,
  ContentContainer,
  DailyForecastsContainer,
  ForecastsTitle,
  MainContentPanel,
} from "./styles";
import UserContext from "../../context/UserContext";
import WeatherService from "../../services/WeatherService";
import ClimateConditionsModel from "../../models/ClimateConditionsModel";
import ImageCityCard from "../../components/ImageCityCard";
import WeatherBudget from "../../components/WeatherBudget";
import { WeatherBudgetType } from "../../@types/components/WeatherBudget";
import { formatTemperatureNumber } from "../../utils/number";

import thermometerIcon from "../../assets/icons/thermometer.png";
import humidityIcon from "../../assets/icons/humidity.png";
import windIcon from "../../assets/icons/wind.png";
import uvIndexIcon from "../../assets/icons/ultraviolet.png";
import WeatherForecastCard from "../../components/WeatherForecastCard";
import DailyForecastModel from "../../models/DailyForecastModel";

const getWeatherBudgets = (climateConditions: ClimateConditionsModel) => {
  const {
    realFeelTemperature,
    relativeHumidity,
    wind,
    uvIndexText,
    temperatureUnit,
    speedUnit,
  } = climateConditions;

  const makeWeatherBudgets: WeatherBudgetType[] = [
    {
      title: "Sensação térmica",
      value: formatTemperatureNumber({
        temperature: realFeelTemperature,
        unit: temperatureUnit,
      }),
      iconSrc: thermometerIcon,
    },
    {
      title: "Umidade relativa",
      value: `${relativeHumidity}%`,
      iconSrc: humidityIcon,
    },
    {
      title: "Velocidade do Vento",
      value: `${wind} ${speedUnit}`,
      iconSrc: windIcon,
    },
    {
      title: "Índice UV",
      value: uvIndexText,
      iconSrc: uvIndexIcon,
    },
  ];

  return makeWeatherBudgets;
};

const weatherService = new WeatherService();

const Home = () => {
  const [climateConditions, setClimateConditions] =
    useState<ClimateConditionsModel | null>(null);

  const [weatherBudgets, setWeatherBudgets] = useState<
    WeatherBudgetType[] | null
  >(null);

  const [dailyForecasts, setDailyForecasts] = useState<
    DailyForecastModel[] | null
  >(null);

  const { state } = useContext(UserContext);
  const { location } = state;

  useEffect(() => {
    const getCurrentClimateConditions = async () => {
      const climateConditionsResponse =
        await weatherService.getCurrentConditionsToLocation({
          locationKey: location.key as number,
        });

      setClimateConditions(climateConditionsResponse);
    };

    const getDailyForecasts = async () => {
      const dailyForecastsResponse = await weatherService.getDailyForecasts({
        locationKey: location.key as number,
      });

      setDailyForecasts(dailyForecastsResponse);
    };

    if (location.key && !location.pending) {
      getCurrentClimateConditions();
      getDailyForecasts();
    }
  }, [location]);

  useEffect(() => {
    const makeWeatherBudgets = () => {
      if (climateConditions) {
        const makeWeatherBudgets = getWeatherBudgets(climateConditions);

        return setWeatherBudgets(makeWeatherBudgets);
      }
    };

    makeWeatherBudgets();
  }, [climateConditions]);

  const renderWeatherNowCard = () => {
    return (
      <WeatherNowCard
        location={location}
        climateConditions={climateConditions}
      />
    );
  };

  const renderWeatherBudgets = () => {
    if (weatherBudgets && weatherBudgets.length) {
      return weatherBudgets.map((budget, index) => {
        return (
          <WeatherBudget
            title={budget.title}
            value={budget.value}
            iconSrc={budget.iconSrc}
            key={index}
          />
        );
      });
    }
  };

  const renderDailyForecasts = () => {
    if (dailyForecasts && dailyForecasts.length) {
      return dailyForecasts.map((dailyForecast, index) => {
        return <WeatherForecastCard {...dailyForecast} key={index} />;
      });
    }
  };

  return (
    <>
      <ContentContainer>
        <MainContentPanel>
          {renderWeatherNowCard()}
          <ImageCityCard />
        </MainContentPanel>
        <BudgetsContainer>{renderWeatherBudgets()}</BudgetsContainer>
        <ForecastsTitle>Previsões do tempo</ForecastsTitle>
        <DailyForecastsContainer>
          {renderDailyForecasts()}
        </DailyForecastsContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
