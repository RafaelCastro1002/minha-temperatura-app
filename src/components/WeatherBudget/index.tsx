import {
  BudgetContainer,
  BudgetIconContainer,
  BudgetInfo,
  BudgetTextContainer,
  BudgetTitle,
  Icon,
} from "./styles";
import WeatherBudgetTypes from "../../@types/components/WeatherBudget";

const WeatherBudget = ({ title, value, iconSrc }: WeatherBudgetTypes.Props) => {
  return (
    <BudgetContainer data-cy="budget-container">
      <BudgetIconContainer>
        <Icon src={iconSrc} />
      </BudgetIconContainer>
      <BudgetTextContainer data-cy="budget-container-text">
        <BudgetTitle data-cy="title-budget">{title}</BudgetTitle>
        <BudgetInfo data-cy="value-Budget">{value}</BudgetInfo>
      </BudgetTextContainer>
    </BudgetContainer>
  );
};

export default WeatherBudget;
