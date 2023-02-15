import User from 'data-pack/user';
import friends from '../data-pack/friends'
import transactions from '../data-pack/transactions'
import data from 'data-pack/data';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/statistics';
// import { Friend } from './Friends/Friend';
import { FriendList } from './Friends/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';


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
          <TransactionHistory items={transactions} />
    </div>
  );
}