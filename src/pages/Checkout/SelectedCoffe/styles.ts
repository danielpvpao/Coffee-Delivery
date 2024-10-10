import styled from "styled-components"
export const Span = styled.span`
    border-bottom: 1px solid ${(props) => props.theme["base-button"]};
    align-items: center;
`
export const H1AndButtons = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 50%;
  h1{
        font-size: ${(props) => props.theme.TextM.fontSize};
        font-family: ${(props) => props.theme.TextM.fontFamily};
        font-weight: ${(props) => props.theme.TextM.fontWeight.regular};
        line-height: ${(props) => props.theme.TextM.lineHeight};
        color: ${(props) => props.theme["base-subtitle"]};
        margin-left: 0.25rem;
  }
  div {
    display: flex;
    flex-direction: row;
  }
`;
export const Buttons = styled.span`
display: flex;
flex-direction: row;
width: 100%;
gap: 0.5rem;
:hover{
  cursor: pointer;
}
.RemoveCoffeButton{
  &:hover{
    background-color: ${(props) => props.theme["base-hover"]};
  }
}
`
export const InputNumber = styled.span`
  background-color: ${(props) => props.theme["base-button"]};
  height: 2rem;
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 6px;
  .Number{
                align-items: center;
                justify-content: center;
                font-size: ${(props) => props.theme.TextM.fontSize};
                font-family: ${(props) => props.theme.TextM.fontFamily};
                font-weight: ${(props) => props.theme.TextM.fontWeight.regular};
                padding-top: 0;
                z-index: 3;
        }

  button {
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.purple};
    border: none;
    background-color: ${(props) => props.theme["base-button"]};
    svg{
      &:hover{
        cursor: pointer;
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }
`;
export const PriceP = styled.p`
                font-size: ${(props) => props.theme.TextM.fontSize};
                font-family: ${(props) => props.theme.TextM.fontFamily};
                font-weight: ${(props) => props.theme.TextM.fontWeight.bold};
                color: ${(props) => props.theme["base-text"]};
                @media (max-width:1024px) {
                margin-bottom: 4rem;
                }
`
