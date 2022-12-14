import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const styles = {
  backgroundColor: 'rgb(247, 247, 247)',
  marginBottom: '50px',
  border: '2px dashed red',
  padding: '50px 0',
};

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <>
      <div style={styles}>
        <Profile
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          stats={stats}
        />
      </div>

      <div style={styles}>
        <Statistics title="Upload stats" stats={data} />
      </div>

      <div style={styles}>
        <FriendList friends={friends} />
      </div>

      <div style={styles}>
        <TransactionHistory items={transactions} />
      </div>
    </>
  );
};
