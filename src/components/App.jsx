import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from './FriendList/FriendList';

import user from '../data/user.json';
import data from '../data/data.json'
import friends from '../data/friends.json'

const styles = {
        backgroundColor: "rgb(247, 247, 247)",
        marginBottom: "50px",
        border: "2px dashed red",
        padding: "50px 0"
}

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
    <div style={styles}>
       <Profile
        userName={username}
        userTag={tag} 
        location={location} 
        avatar={avatar} 
        followers={stats.followers} 
        views={stats.views} 
        likes={stats.likes} />
      </div>
      
      <div style={styles}>
      <Statistics title="Upload stats" stats={data} />
      </div>

      <div style={styles}>
      <FriendList friends={friends} />
      </div>
      </>
  );
};
