type WeatherNumberFormatType = {
  temperature: number;
  unit: string;
};

export const formatTemperatureNumber = ({
  temperature,
  unit,
}: WeatherNumberFormatType) => {
  if (!temperature) {
    return NaN;
  }

  return `${Math.floor(temperature)}°${unit}`;
};

export const formatNumberWithTwoDigitsMinimum = (number: number) => {
  return number.toLocaleString("pt-br", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
};
