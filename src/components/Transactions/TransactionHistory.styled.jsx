import styled from "@emotion/styled";

export const Table = styled.table`
margin: 30px auto;
  width: 600px;
  border-radius: 4px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  table-layout: fixed;
  border-collapse: collapse;`

export const TableHeader = styled.thead`
   color: #fff;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 800;
  line-height: 30px;
  background-color: #00bcd4;`
export const TableBody = styled.tbody`
font-size: 15px;
    font-weight: 300;
    line-height: 30px;
`
export const TableItem = styled.tr`
background-color: #fff;
&:nth-of-type(even) {
  background-color: #ecf2f3;
}`
export const TableText = styled.td`
 text-transform: capitalize;`