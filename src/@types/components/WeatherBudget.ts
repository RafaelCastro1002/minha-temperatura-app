export type WeatherBudgetType = {
  title: string;
  value: string | number | boolean;
  iconSrc: string;
};

namespace WeatherBudgetTypes {
  export type Props = WeatherBudgetType;
}

export default WeatherBudgetTypes;
