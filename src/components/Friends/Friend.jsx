import PropTypes from 'prop-types';
import { FriendListItemStyle, StatusItem, Avatar, FreindName } from './Friend.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <FriendListItemStyle >
        <StatusItem status={isOnline}></StatusItem>
        <Avatar src={avatar} alt="User avatar" />
        <FreindName>{name}</FreindName>
    </FriendListItemStyle >
}

FriendListItem.propTypes = {
    friend: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }).isRequired
    )
}