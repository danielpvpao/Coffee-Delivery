import styled from "styled-components";

export const CoffeListContainer = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 8rem;
    gap: 4rem;
    @media (max-width:1024px) {
      width: 100vw;
    }
    h1{
       font-size: ${(props) => props.theme.TitleL.fontSize};
        font-family: ${(props) => props.theme.TitleL.fontFamily};
        line-height: ${(props) => props.theme.TitleL.lineHeight};
        font-weight: ${(props) => props.theme.TitleL.fontWeight};
        color:  ${(props) => props.theme["base-subtitle"]};
        @media (max-width:768px) {
       margin: 0 auto;
       }
    }
    section {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 8rem;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  .ConnectionDiv {
    display: flex;
    gap: 8rem;

    @media (max-width: 1024px) {
      width: 90vw;
      gap: 1rem;
      margin: 0 auto;
    }
  }
}
`;
