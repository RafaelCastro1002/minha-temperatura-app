import WeatherNowCardTypes from "../../@types/components/WeatherNowCard";
import {
  formatNumberWithTwoDigitsMinimum,
  formatTemperatureNumber,
} from "../../utils/number";
import {
  CardContainer,
  ContainerTitleCard,
  ContentCard,
  DescriptionSky,
  LoadingImage,
  LoadingMessage,
  ShowLoadingContainer,
  SubtitleCard,
  TitleCard,
  WeatherIconImg,
  WeatherTemperature,
} from "./styles";
import LoadingImageSrc from "../../assets/images/loading.gif";

const WeatherNowCard = (props: WeatherNowCardTypes.Props) => {
  const { climateConditions, location } = props;
  const { pending: locationPending, name: cityName } = location;

  const formattedTemperature =
    climateConditions &&
    formatTemperatureNumber({
      temperature: climateConditions.currentTemperature,
      unit: climateConditions.temperatureUnit,
    });
  const formattedWeatherIconId = climateConditions?.weatherIconId
    ? formatNumberWithTwoDigitsMinimum(climateConditions.weatherIconId)
    : "01";

  const renderLoading = () => {
    return (
      <ShowLoadingContainer>
        <LoadingImage src={LoadingImageSrc} />
        <LoadingMessage data-cy="loading-message">
          Esperando localização
        </LoadingMessage>
      </ShowLoadingContainer>
    );
  };

  return (
    <CardContainer>
      {locationPending || !climateConditions ? (
        renderLoading()
      ) : (
        <>
          <ContainerTitleCard>
            <SubtitleCard>Clima agora</SubtitleCard>
            <TitleCard data-cy="city-name">{cityName}</TitleCard>
          </ContainerTitleCard>

          <ContentCard>
            <WeatherIconImg
              src={`https://developer.accuweather.com/sites/default/files/${formattedWeatherIconId}-s.png`}
            />
            <WeatherTemperature data-cy="temperature-value">
              {formattedTemperature}
            </WeatherTemperature>
            <DescriptionSky data-cy="weather-text">
              {climateConditions.weatherText}
            </DescriptionSky>
          </ContentCard>
        </>
      )}
    </CardContainer>
  );
};

export default WeatherNowCard;
