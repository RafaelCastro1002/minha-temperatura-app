import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 5em 12vw;
`;

export const MainContentPanel = styled.div`
  height: 20em;
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column !important;
    height: auto;
    background-color: red !important;
  }
`;

export const BudgetsContainer = styled.div`
  margin: 3.5em 0;
  display: flex;
  justify-content: space-between;
`;

export const ForecastsTitle = styled.p`
  font-family: "bold italic";
  font-size: 1.2em;
  color: ${(props) => props.theme.colors.black};
  margin-top: 3em;
`;

export const DailyForecastsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-evenly;
  margin-top: 2.7em;
`;
