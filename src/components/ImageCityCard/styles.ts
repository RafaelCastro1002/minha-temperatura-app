import styled from "styled-components";

export const CardImageCity = styled.div`
  margin: 0;
  width: 65%;
  border-radius: 18px;
  object-fit: cover;
  background-color: red;
  overflow: hidden;
  background-color: black;
  z-index: 999;

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

export const ImageCity = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-filter: grayscale(10%); /* Safari 6.0 - 9.0 */
  filter: brightness(0.4);
`;

export const CityNameCard = styled.p`
  position: relative;
  color: ${(props) => props.theme.colors.lightGray};
  bottom: 3.5em;
  left: 2em;
  font-family: "light";
  font-size: 1.4em;
  line-height: 1em;
`;
