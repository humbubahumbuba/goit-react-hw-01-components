import styled from "@emotion/styled";

const randomColor = () => {
    return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
}

export const StatSection = styled.section`
margin-top: 20px;
background-color:lightgrey;
border: 1px solid grey;
border-radius: 4px;
`
export const TitleText = styled.h2`
text-align: center;
font-size:24px;`

export const StatList = styled.ul`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
padding-right:10px;
padding-left: 10px;

`

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50px;
 padding: 15px;
 background-color: ${randomColor}`

export const StatLabel = styled.span`
 font-size: 18px;
 color: white;`

export const StatValue = styled.span`
 font-size: 22px;
 color: white;
 font-weight: 600`