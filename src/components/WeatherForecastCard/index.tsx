import { useState } from "react";
import DailyForecastModel from "../../models/DailyForecastModel";
import { DAYS_OF_WEEK, formatDate, getDayOfWeek } from "../../utils/date";
import {
  formatNumberWithTwoDigitsMinimum,
  formatTemperatureNumber,
} from "../../utils/number";
import {
  ClimateConditionsContainer,
  ClimateConditionsFromPeriod,
  ContainerCard,
  PeriodTitleClimateConditions,
  TemperatureRangeContainer,
  TemperatureValue,
  TextDescriptionClimateConditions,
  TitleContainer,
  TitleDate,
  TitleDay,
  WeatherIcon,
} from "./styles";

export const verifyIsDayTime = (date: Date) => {
  const hours = date.getHours();

  return hours > 6 && hours < 20;
};

const WeatherForecastCard = (props: DailyForecastModel) => {
  const {
    date,
    maximumTemperature,
    minimumTemperature,
    temperatureUnit,
    dayIconId,
    nightIconId,
    dayIconText,
    nightIconText,
  } = props;

  const [isDayPeriod] = useState(verifyIsDayTime(new Date()));

  const minimumTemperatureFormatted = formatTemperatureNumber({
    temperature: minimumTemperature,
    unit: temperatureUnit,
  });

  const maximumTemperatureFormatted = formatTemperatureNumber({
    temperature: maximumTemperature,
    unit: temperatureUnit,
  });

  const verifyDayOfWeekIsToday = (date: Date) => {
    let dayOfWeek = getDayOfWeek(date);
    const dayOfWeekFromToday = getDayOfWeek(new Date());

    if (dayOfWeek === dayOfWeekFromToday) {
      dayOfWeek = "today";
    }

    return DAYS_OF_WEEK[dayOfWeek.toLocaleLowerCase()].toUpperCase();
  };

  const getIconId = () => {
    const iconId = isDayPeriod ? dayIconId : nightIconId;

    return formatNumberWithTwoDigitsMinimum(iconId);
  };

  const getIconText = () => {
    return isDayPeriod ? dayIconText : nightIconText;
  };

  const getDayPeriod = isDayPeriod ? "Dia" : "Noite";

  return (
    <ContainerCard data-cy="forecast-card">
      <TitleContainer>
        <TitleDay>{verifyDayOfWeekIsToday(date)}</TitleDay>
        <TitleDate>{formatDate(date)}</TitleDate>
      </TitleContainer>
      <ClimateConditionsContainer data-cy="container">
        <ClimateConditionsFromPeriod data-cy="period-container">
          <PeriodTitleClimateConditions>
            {getDayPeriod}
          </PeriodTitleClimateConditions>
          <WeatherIcon
            src={`https://developer.accuweather.com/sites/default/files/${getIconId()}-s.png`}
          />
          <TextDescriptionClimateConditions data-cy="text-description">
            {getIconText()}
          </TextDescriptionClimateConditions>
        </ClimateConditionsFromPeriod>
        <TemperatureRangeContainer data-cy="temperature-range">
          <TemperatureValue data-cy="maximum-temperature">
            {maximumTemperatureFormatted}
          </TemperatureValue>
          <TemperatureValue data-cy="minimum-temperature">
            {minimumTemperatureFormatted}
          </TemperatureValue>
        </TemperatureRangeContainer>
      </ClimateConditionsContainer>
    </ContainerCard>
  );
};

export default WeatherForecastCard;
