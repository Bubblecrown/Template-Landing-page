import styled from "styled-components";
import { Button, Primary, Secondary } from "../../globalStyles";

export const HeroSection = styled.header`
  padding: 40px 0;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.aside`
  flex: 1;
  max-width: 48%;
  flex-basis: 48%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

export const TextWrapper = styled.div``;

export const HeroTabLine = styled.div`
  ${({ title }) =>
    title &&
    `position: relative;
    margin: 0 10px;
    width: 160px;
    font-size:1.20rem;
    display:flex;
    justify-content:center;
    color: ${Primary};
&:before{content: '';
  position: absolute;
  display: block;
  width: 30px;
  height: 3px;
  background-color: ${Primary};
  top: 50%;
  left: 0;
}
&:after{content: '';
  position: absolute;
  display: block;
  width: 30px;
  height: 3px;
  background-color: ${Primary};
  top: 50%;
  right: 0;
}`}
`;

export const HeroTitle = styled.h1`
  font-size: ${({ headTitle }) => (headTitle ? "3.3rem" : "2.75rem")};
  margin: ${({ title }) => (title ? "20px 0" : "0 0")};
`;

export const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
  margin: 20px 0;
  color: ${Secondary};
`;

export const HeroImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${({ imageStart }) =>
    imageStart ? "flex-start" : "center"};
  position: relative;
  ${({ circle }) =>
    circle &&
    `&:before {
    content: "";
    position: absolute;
    width: 350px;
    height: 350px;
    border-radius: 200px;
    background-color: ${Primary};
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    z-index: -1;}`}
`;

export const Img = styled.img``;

export const HeroButton = styled(Button)`
  ${Button};
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;