import styled from "@emotion/styled";
const setStatusColor = props => {
    switch (props.status) {
        case true:
            return '#0b970b';
        case false:
            return '#b32929';
        default:
            return '#000';

    }
}
export const FriendListItemStyle = styled.li`
display: flex;
align-item: center;
background-color: #fff;
  border: 1px solid grey;
  margin-bottom: 10px;
  padding:  5px 10px;
  border-radius: 5px;`

export const StatusItem = styled.span`
margin-right: 10px;
margin-top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${setStatusColor};
  `

export const Avatar = styled.img`
 margin-right: 10px;
  width: 80px;
  border-radius: 5px;`

export const FreindName = styled.p`
padding-top: 25px;
font-size: 20px;
  font-weight: 700;`