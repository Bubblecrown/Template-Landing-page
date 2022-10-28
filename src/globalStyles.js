import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family: 'Inter', sans-serif;
  
}
body{
  background-color: #e7f3f9;
}

`;

export const Primary = "#3ca7dd";
export const Secondary = "#696e70";
export const Maintext = "#000";
export const BgColor = "#e7f3f9";
export const BgCircleColor = "#eff7fb";

export const Section = styled.div`
  padding: 80px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0;

  @media screen and (max-width: 1220px) {
    padding: 0 30px;
  }
`;

export const Button = styled.button`
  border-radius: 20px;
  padding: ${({ pd }) => (pd ? pd : "10px 20px")};
  white-space: nowrap;
  background-color: ${Primary};
  outline: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
`;

export default GlobalStyles;
