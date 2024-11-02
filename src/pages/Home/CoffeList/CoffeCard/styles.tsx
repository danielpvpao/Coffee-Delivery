import styled from "styled-components";
export const CoffeCardContainer = styled.div`
div {
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
align-items: center;
display: flex;
width: 16rem;
height: 19.375rem;
text-align: center;
flex-direction: column;
background-color: ${(props) => props.theme["base-card"]};
@media (max-width:768px) {
    width: 45vw;
    height: 24rem;
}
img{
margin-top:  -2rem; 
}
.TagDiv{
display: flex;
flex-direction: row;
width: 80%;
margin: 0 auto;
gap: 0.25rem;
justify-content: center;
.Tag {
font-size: ${(props) => props.theme.Tag.fontSize};
font-family: ${(props) => props.theme.Tag.fontFamily};
line-height: ${(props) => props.theme.Tag.lineHeight};
font-weight: ${(props) => props.theme.Tag.fontWeight};
color: ${(props) => props.theme["yellow-dark"]};
padding: 0.25rem 0.15rem;
text-align: center;
border-radius: 100px;
background-color: ${(props) => props.theme["yellow-light"]};
margin-top: 0.75rem;
width: 5.06rem;
align-items: center;
white-space: nowrap;
justify-content: center;
display: flex;
@media (max-width: 1024px) {
    width: 3.8rem;
}
}
}
h1 {
font-size: ${(props) => props.theme.TitleS.fontSize};
font-family: ${(props) => props.theme.TitleS.fontFamily};
font-weight: ${(props) => props.theme.TitleS.fontWeight};
line-height: ${(props) => props.theme.TitleS.lineHeight};
color: ${(props) => props.theme["base-subtitle"]};
margin-top: 1rem;
}

p {
font-size: ${(props) => props.theme.TextS.fontSize};
font-family: ${(props) => props.theme.TextS.fontFamily};
font-weight: ${(props) => props.theme.TextS.fontWeight};
line-height: ${(props) => props.theme.TextS.lineHeight};
color: ${(props) => props.theme["base-label"]};
gap: 0.2rem;
width: 90%;
margin-top: 0.5rem;
}

span {
display: flex;
width: 85%;
justify-content: space-between;
margin-top: 2.06rem;
margin-bottom: 1rem;
@media (max-width: 1024px) {
    margin-top: 0;
    flex-direction: column;
    white-space: nowrap;
    height: 100%;
    align-items: center;
    justify-content: center;
}
p {
    align-items: baseline;
    margin-bottom: 0.5rem;
    white-space: nowrap;
  strong {
    font-size: ${(props) => props.theme.TextS.fontSize};
    font-family: ${(props) => props.theme.TextS.fontFamily};
    font-weight: ${(props) => props.theme.TextS.fontWeight};
    line-height: ${(props) => props.theme.TextS.lineHeight};
    color: ${(props) => props.theme["base-text"]};
  }

  font-size: ${(props) => props.theme.TitleM.fontSize};
  font-family: ${(props) => props.theme.TitleM.fontFamily};
  font-weight: ${(props) => props.theme.TitleM.fontWeight};
  line-height: ${(props) => props.theme.TitleM.lineHeight};
  color: ${(props) => props.theme["base-text"]};
}
}
div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
    .Input-number {
background-color: ${(props) => props.theme["base-button"]};
width: 4.5rem;
height: 2.375rem;
border: none;
display: flex;
flex-direction: row;
justify-content: space-around;
border-radius: 6px;
@media (max-width: 1024px) {
    margin-bottom: 1rem;
    width: 7rem;
}
button{
    align-items: center;
    color:${(props) => props.theme.purple};
    border: none;
    height: 100%;
    background-color: ${(props) => props.theme["base-button"]};
    &:hover{
        cursor: pointer;
        color: ${(props) => props.theme["purple-dark"]};
    }
}
}
div{
    font-size: ${(props) => props.theme.TextM.fontSize};
    font-family: ${(props) => props.theme.TextM.fontFamily};
    font-weight: ${(props) => props.theme.TextM.fontWeight.regular};
    line-height: ${(props) => props.theme.TextM.lineHeight};
    color: ${(props) => props.theme["base-title"]};
    background-color: ${(props) => props.theme["base-button"]};
    border: none;
    width: 20%;
    z-index: 3;
}
}

button {
color:  ${(props) => props.theme.white};
background-color: ${(props) => props.theme["purple-dark"]};
border: none;
padding: 0.5rem;
border-radius: 6px;
height: 2.375rem;
&:hover{
    cursor: pointer;
    background-color:${(props) => props.theme.purple};
}
}
}
`
