import PropTypes from 'prop-types';
import { ProfileCard, ProfileInfo,Username,UserTag,UserLocation,UserStatList,UserStatItem,StatText,StatValue} from './Profile.styled';

 export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <ProfileInfo>
        <img src={avatar} alt="User avatar" className="avatar" />
        <Username>{username}</Username>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </ProfileInfo>

      <UserStatList>
        <UserStatItem>
          <StatText>Followers</StatText>
          <StatValue>{stats.followers}</StatValue>
        </UserStatItem>
        <UserStatItem>
          <StatText>Views</StatText>
          <StatValue>{stats.views}</StatValue>
        </UserStatItem>
        <UserStatItem>
          <StatText>Likes</StatText>
          <StatValue>{stats.likes}</StatValue>
        </UserStatItem>
      </UserStatList>
    </ProfileCard>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};

