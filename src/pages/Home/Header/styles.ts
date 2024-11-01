import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  @media (max-width:1024px) {
    width: 80vw;
    }
  div{
    width: 80%;
    display: flex;
    margin: 0 auto;
    padding-top: 2rem;
    justify-content: space-between;
    @media (max-width:1024px) {
      width: 85vw;
    }
    nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 8rem;
    gap: 1.33rem;
   @media(max-width: 1024px) {
   margin-right:  0;
   gap: 0.2rem;
  }
}
    span {
      padding: 1rem;
      display: flex;
      height: 2.375rem;
      background-color: ${(props) => props.theme["purple-light"]};
      border-radius: 6px;
      align-items: center;

      p {
        font-family: ${(props) => props.theme.TextS.fontFamily};
        font-size: ${(props) => props.theme.TextS.fontSize};
        font-weight: ${(props) => props.theme.TextS.fontWeight};
        line-height: ${(props) => props.theme.TextS.lineHeight};
        color: ${(props) => props.theme["purple-dark"]};
      }

      svg {
        color: ${(props) => props.theme["purple"]};
      }
    }

    button {
      border-radius: 6px;
      width: 2.375rem;
      height: 2.375rem;
      padding: 0.5rem 0;
      border: none;
      background-color: ${(props) => props.theme["yellow-light"]};
      position: relative;
        div{
         text-align: center;
            position: absolute;
            font-size: ${(props) => props.theme.TextS.fontSize};
            font-weight: ${(props) => props.theme.TextS.fontWeight};
            font-family: ${(props) => props.theme.TextS.fontFamily};
            font-weight: ${(props) => props.theme.TextS.fontWeight};
            line-height: 20%;
            color: white;
            width: 1.25rem;
            height: 1.25rem;
            padding: 10px 6px;
            border-radius: 1000px;
            background: orange;
            bottom: 1.6rem;
            left: 1.6rem;
            background-color: ${(props) => props.theme["yellow-dark"]};
        }
      svg {
        color: ${(props) => props.theme["yellow-dark"]};
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (max-width: 1024px) {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
`;
