import styled from "styled-components";

export const CheckoutContainer = styled.div`
  section {
    display: grid;
    margin: 0 auto;
    width: 80vw;
    grid-template-columns: 40rem 28rem;
    gap: 20rem;
    margin-top: 5rem;
    @media (max-width: 1024px) {
      gap: 2rem;
      display: flex;
      flex-direction: column;
  }
}
`;

export const FormContainer = styled.div`
  height: 36.93rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  form {
    background-color: ${(props) => props.theme["base-card"]};
    display: flex;
    border-radius: 6px;
    flex-direction: column;
    height: 23.25rem;
    @media (max-width:1024px) {
      width: 100vw;
    }
    .H1AndP {
      width: 90%;
      color: ${(props) => props.theme["yellow-dark"]};
      margin: 0 auto;
      margin-top: 2.5rem;
      gap: 0.2rem;
      display: flex;

      span {
        display: flex;
        flex-direction: column;
        color: ${(props) => props.theme["yellow-dark"]};

        h1 {
          font-size: ${(props) => props.theme.TextM.fontSize};
          font-family: ${(props) => props.theme.TextM.fontFamily};
          font-weight: ${(props) => props.theme.TextM.fontWeight.regular};
          line-height: ${(props) => props.theme.TextM.lineHeight};
          color: ${(props) => props.theme["base-subtitle"]};
        }
        
        p {
          font-size: ${(props) => props.theme.TextS.fontSize};
          font-family: ${(props) => props.theme.TextS.fontFamily};
          font-weight: ${(props) => props.theme.TextS.fontWeight};
          line-height: ${(props) => props.theme.TextS.lineHeight};
          color: ${(props) => props.theme["base-text"]};
        }
      }
    }
    
    .Inputs2, .Inputs3 {
      display: flex;
      gap: 0.75rem;
      justify-content: space-between;
      @media (max-width:1024px){
        max-width: 100%;
        gap: 0.5rem;
      }
    }
  }
`;

export const SelectedCoffeesContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 1rem;
       .FirstItemP{
        font-size: ${(props) => props.theme.TitleXS.fontSize};
        font-weight: ${(props) => props.theme.TitleXS.fontWeight};
        font-family: ${(props) => props.theme.TitleXS.fontFamily};
        line-height: ${(props) => props.theme.TitleXS.lineHeight};
        color: ${(props) => props.theme["base-subtitle"]};
}
  > div {
    background-color: ${(props) => props.theme["base-card"]};
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    min-height: 31.125rem;
    @media (max-width:1024px){
      width: 100vw;
    }
    div {
      width: 80%;
      height: 100%;
      padding-top:2rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
   
      span {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0.25rem;
        img {
          max-width: 4rem;
          max-height: 4rem;
        }
        button{
                padding: 0 0.50rem;
                gap: 0.25rem;
                display: flex;
                font-size: ${(props) => props.theme.ButtonM.fontSize};
                font-family: ${(props) => props.theme.ButtonM.fontFamily};
                font-weight: ${(props) => props.theme.ButtonM.fontWeight};
                line-height: ${(props) => props.theme.ButtonM.lineHeight};
                color: ${(props) => props.theme["base-text"]};
                justify-content: center;
                align-items: center;
                border-radius: 6px;
                background-color: ${(props) => props.theme["base-button"]};
                border: none;
               
                svg{
                        color: ${(props) => props.theme.purple};
                }
        }
        h2{
                font-size: ${(props) => props.theme.ButtonM.fontSize};
                font-family: ${(props) => props.theme.ButtonM.fontFamily};
                font-weight: ${(props) => props.theme.ButtonM.fontWeight};
                line-height: ${(props) => props.theme.ButtonM.lineHeight};    
          color: ${(props) => props.theme["base-text"]};
        }
      }
    }
  }
`;

export const BaseInput = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  font-size: ${(props) => props.theme.TextS.fontSize};
  font-family: ${(props) => props.theme.TextS.fontFamily};
  line-height: ${(props) => props.theme.TextS.lineHeight};
  font-weight: ${(props) => props.theme.TextS.fontWeight};
  color: ${(props) => props.theme["base-label"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
 &:focus{
  outline: none;
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
 }

  &.input1 {
    width: 12.5rem;
    @media (max-width:1024px){
        max-width: 12.5rem;
      }
  }
  &.input2 {
    width: 100%;
  }
  &.input3 {
    width: 12.5rem;
    @media (max-width:1024px){
        max-width: 10rem;
      }
  }
  &.input4{
    width: 22.2rem;
    @media (max-width:1024px){
        max-width: 11.5rem;
      }
  }
  &.input5 {
    width: 12.5rem;
    @media (max-width:1024px){
        max-width: 8rem;
      }
  }
  &.input6 {
    width: 17.25rem;
    @media (max-width:1024px) {
      width: 7rem;
    }
  }
  &.input7 {
    width: 3.75rem;
  }
`;

export const FormContainerAndP = styled.div`
  h1 {
    width: 80%;
  }
  p {
        font-size: ${(props) => props.theme.TitleXS.fontSize};
        font-weight: ${(props) => props.theme.TitleXS.fontWeight};
        font-family: ${(props) => props.theme.TitleXS.fontFamily};
        line-height: ${(props) => props.theme.TitleXS.lineHeight};
        color: ${(props) => props.theme["base-subtitle"]};
        padding-bottom: 1rem;
  }
`;
export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin: 2rem auto;
`;

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  height: 12.93rem;
  @media (max-width:1024px) {
      width: 100vw;
    }
  .H1AndP {
    width: 90%;
    color: ${(props) => props.theme.purple};
    margin: 0 auto;
    margin-top: 2.5rem;
    gap: 0.2rem;
    display: flex;

    span {
      display: flex;
      flex-direction: column;

      h1 {
        font-size: ${(props) => props.theme.TextM.fontSize};
        font-weight: ${(props) => props.theme.TextM.fontWeight.regular};
        font-family: ${(props) => props.theme.TextM.fontFamily};
        line-height: ${(props) => props.theme.TextM.lineHeight};
        color: ${(props) => props.theme["base-subtitle"]};
      }
      
      p{
        font-size: ${(props) => props.theme.TextS.fontSize};
        font-weight: ${(props) => props.theme.TextS.fontWeight};
        font-family: ${(props) => props.theme.TextS.fontFamily};
        line-height: ${(props) => props.theme.TextS.lineHeight};
        color: ${(props) => props.theme["base-text"]};
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  height: 3.18rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
@media (max-width: 1024px) {
  white-space: nowrap;
  width: 98%;
  gap: 0.8rem;
}
  button {
    height: 100%;
    width: 11.125rem;
    border-radius: 6px;
    margin-top: 2rem;
    font-size: ${(props) => props.theme.ButtonM.fontSize};
    font-weight: ${(props) => props.theme.ButtonM.fontWeight};
    font-family: ${(props) => props.theme.ButtonM.fontFamily};
    line-height: ${(props) => props.theme.ButtonM.lineHeight};
    color: ${(props) => props.theme["base-text"]};
    border: none;
    border-radius: 6px;
    background-color: ${(props) => props.theme["base-button"]};
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 0.75rem;
    @media (max-width:1024px) {
      width: 8rem;
      text-align: center;
      align-items: center;
      padding: 0.1rem;
      font-size: 0.65rem;
    }
  &:hover{
    cursor: pointer;
  }
  &.active {
    background-color: ${(props) => props.theme["purple-light"]};
    border: 1px solid  ${(props) => props.theme.purple};
  }
    svg {
      color: ${(props) => props.theme.purple};
    }
  }
`;



export const TotalItems = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
 margin-top: 1.5rem;
  p{
        display: flex;
        justify-content: space-between;
        color: ${(props) => props.theme["base-text"]};
        font-size: ${(props) => props.theme.TextM.fontSize};
        font-family: ${(props) => props.theme.TextM.fontFamily};
        font-weight: ${(props) => props.theme.TextM.fontWeight};
        
        &:last-child{
                align-items: center;
        display: flex;
        justify-content: space-between;
        color: ${(props) => props.theme["base-subtitle"]};
        font-size: ${(props) => props.theme.TextL.fontSize};
        font-family: ${(props) => props.theme.TextL.fontFamily};
        font-weight: ${(props) => props.theme.TextL.fontWeight.bold};
}
        strong{
                display: flex;
        justify-content: space-between;
        color: ${(props) => props.theme["base-text"]};
        font-size: ${(props) => props.theme.TextM.fontSize};
        font-family: ${(props) => props.theme.TextM.fontFamily};
        font-weight: ${(props) => props.theme.TextM.fontWeight};
        line-height: ${(props) => props.theme.TextM.lineHeight};
        }
  }
 
`;

export const ConfirmOrderButton = styled.button`
border-radius: 6px;
background-color: ${(props) => props.theme["yellow"]};
color: ${(props) => props.theme.white};
padding: 0.5rem 0.75rem;
height: 2.88rem;
border: none;
&:hover{
        cursor: pointer;
background-color: ${(props) => props.theme["yellow-dark"]};

}
`
