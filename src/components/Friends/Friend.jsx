import PropTypes from 'prop-types';

export const Friend = ({ avatar, name, isOnloine }) => {
  return (
 
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
