import PropTypes from 'prop-types';
import { FriendListItem } from './Friend';
import { FriendListStyle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return <FriendListStyle>
        {friends.map(friend => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
        ))}
    </FriendListStyle>
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
}