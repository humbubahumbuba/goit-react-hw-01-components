import User from 'data-pack/user';
import { Profile } from './Profile/Profile';
import Statistics from './Statistics/statistics';
import data from 'data-pack/data';
// import { Friend } from './Friends/Friend';
import { FriendList } from './Friends/FriendList';
import friends from '../data-pack/friends'

export default function App() {
  return (
    <div>
      <Profile
        username={User.username}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
          />
          
      <Statistics title="Upload stats" stats={data} />
         
          
          <FriendList friends={friends} />
    </div>
  );
}