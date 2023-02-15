import PropTypes from 'prop-types';
import { Friend } from './Friend';


export const FriendList = ({ friends }) => {
  return (
    < ul className="friend-list">
      {friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};


