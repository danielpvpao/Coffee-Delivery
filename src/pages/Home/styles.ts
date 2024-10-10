import styled from "styled-components";

export const BaseArticle = styled.article`
  font-family: ${(props) => props.theme.TextM.fontFamily};
  font-size: ${(props) => props.theme.TextM.fontSize};
  line-height: 250%;
  font-weight: ${(props) => props.theme.TextM.fontWeight.regular};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-top: 1rem;
  @media (max-width: 1024px) {
    line-height: 250%;
    padding-top: 0;
  }
  .svgContainer{
    display: flex;
  justify-content: center;
  align-items: center;
  }
`;

export const StyledSection = styled.section`
  width: 100vw;
  display: flex;
  justify-content: space-around;
 
  img{
    padding-left: 15rem;
  }
`;
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;  
  margin: 0 auto;
  white-space: nowrap;
  padding: 0 10%;
  margin-top: 4rem;
  
img{
  margin-left: 20%;
  width: 33.75rem;
}
@media (max-width: 1024px) {
  flex-direction: column;
  img{
    width: 100%;
    margin-top: 1rem;
    margin: 0 auto;
  }
  
 }
  div {
    display: flex;
    flex-direction: column; 
    margin-top: 1rem;
    .Iconsdiv {
    display: flex;
    flex-direction: row;
    @media (max-width: 1024px) {
    width: 80%;
    flex-direction: column;
  }
  .svgContainer{
    display: block;
  }
  }
}
    h1 {
      font-family: ${(props) => props.theme.TitleXL.fontFamily};
      font-size: ${(props) => props.theme.TitleXL.fontSize};
      line-height: ${(props) => props.theme.TitleXL.lineHeight};
      font-weight: ${(props) => props.theme.TitleXL.fontWeight};
    }
    
    p {
      margin-top: 1rem;
      font-family: ${(props) => props.theme.TextL.fontFamily};
      font-size: ${(props) => props.theme.TextL.fontSize};
      line-height: ${(props) => props.theme.TextL.lineHeight};
      font-weight: ${(props) => props.theme.TextL.fontWeight.regular};
      color: ${(props) => props.theme["base-subtitle"]};
    }
@media (max-width: 1024px) {
  h1{
    font-size: 1.7rem;
  }
  p{
    font-size: 0.7rem;
  }
  
}
    div {
    display: flex;
    justify-content: space-between; 
      ${BaseArticle} {
        &.CartArticle {
          svg {
            border-radius: 1000px;
            border: 8px solid ${(props) => props.theme["yellow-dark"]};
            box-sizing: content-box;
            color: ${(props) => props.theme.white};
            background-color: ${(props) => props.theme["yellow-dark"]};
           
          }
        }

        &.TimerArticle {
          svg {
            border-radius: 1000px;
            border: 8px solid ${(props) => props.theme["yellow"]};
            box-sizing: content-box;
            color: ${(props) => props.theme.white};
            background-color: ${(props) => props.theme["yellow"]};
          }
        }

        &.PackageArticle {
          svg {
            border-radius: 1000px;
            border: 8px solid ${(props) => props.theme["base-text"]};
            box-sizing: content-box;
            color: ${(props) => props.theme.white};
            background-color: ${(props) => props.theme["base-text"]};
      
           
          }
        }

        &.CoffeArticle {
          svg {
            border-radius: 1000px;
            border: 8px solid ${(props) => props.theme["purple"]};
            box-sizing: content-box;
            color: ${(props) => props.theme.white};
            background-color: ${(props) => props.theme["purple"]};
          }
        }
      }
    }
`;
