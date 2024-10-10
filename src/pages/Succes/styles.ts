import styled from "styled-components";

export const MainContainer = styled.main`
  section {
    display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 6rem;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  img {
      margin-right: 8.5rem;
      margin-top: 6.7rem;
      @media (max-width: 1024px) {
    width: 95vw;
  }
    }
  }
`;

export const BaseWithH1 = styled.div`
 

    h1 {
      font-size: ${(props) => props.theme.TitleL.fontSize};
      font-family: ${(props) => props.theme.TitleL.fontFamily};
      font-weight: ${(props) => props.theme.TitleL.fontWeight};
      line-height: ${(props) => props.theme.TitleL.lineHeight};
      color: ${(props) => props.theme["yellow-dark"]};
    }

    .FirstP{
      font-size: ${(props) => props.theme.TextL.fontSize};
      font-family: ${(props) => props.theme.TextL.fontFamily};
      font-weight: ${(props) => props.theme.TextL.fontWeight.regular};
      line-height: ${(props) => props.theme.TextL.lineHeight};
      color: ${(props) => props.theme["base-subtitle"]};
    }
    span {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content  : space-around;
        align-items: center;
        width: 32.875rem;
        border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
        border: double 1px transparent;
        background-image: linear-gradient(white, white),
        linear-gradient(90deg ,#DBAC2C, #8047F8);
        background-origin: border-box;
        background-clip: content-box, border-box;
        border-image-slice: 1;
        margin-top: 3rem;
        @media (max-width:1024px) {
          width: 95vw;
        }
        .ComplementarDiv{
          height: 80%;
          width: 100%;
          padding-top: 2.55rem;
          padding-bottom: 2.55rem;
          gap: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      article {
        display: flex;
        width: 80%;
        margin: 0 auto;
        
        gap: 0.75rem;
        .SVG1 {
    box-sizing: content-box;
    color: white;
    border-radius: 1000px;
    border: 8px solid ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme.purple};
  }

  .SVG2 {
    box-sizing: content-box;
    color: white;
    border-radius: 1000px;
    border: 8px solid ${(props) => props.theme.yellow};
    background-color: ${(props) => props.theme.yellow};
  }

  .SVG3 {
    box-sizing: content-box;
    color: white;
    border-radius: 1000px;
    border: 8px solid ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
        div{
          
            p{
                color: ${(props) => props.theme["base-text"]};
                font-size: ${(props) => props.theme.TextM.fontSize};
                white-space: nowrap;
                font-family: ${(props) => props.theme.TextM.fontFamily};
                font-weight: ${(props) => props.theme.TextM.fontWeight.regular};
                line-height: ${(props) => props.theme.TextM.lineHeight};
                color: ${(props) => props.theme["base-subtitle"]};
                
            }
        }
        
      }
    }

    
`;
