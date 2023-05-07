import styled from "styled-components";

export const BudgetContainer = styled.div`
  width: 17vw;
  height: 3.3em;
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
`;

export const BudgetIconContainer = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.blue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 18px;
  border-top-left-radius: 18px;
`;

export const Icon = styled.img`
  width: 1.7vw;
`;

export const BudgetTextContainer = styled.div`
  width: 70%;
  padding-left: 1.3em;
  border-top-right-radius: 18px;
  border-bottom-right-radius: 18px;
`;

export const BudgetTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "light";
  font-size: 0.8em;
  line-height: 0.1em;
`;

export const BudgetInfo = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: "bold";
  font-size: 1.3em;
  line-height: 0.1em;
  padding-left: 0.7em;
`;
