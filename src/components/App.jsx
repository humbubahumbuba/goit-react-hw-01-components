import User from 'data-pack/user';
import Profile from 'components/Profile';
import Statistics from './statistics';
import data from 'data-pack/data';

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
      <Statistics stats={data} />
    </div>
  );
}