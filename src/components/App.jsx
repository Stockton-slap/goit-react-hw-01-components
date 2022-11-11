import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from '../user.json';
import data from '../data.json'

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <>
    <div style={{
        backgroundColor: "rgb(167, 167, 167)",
        marginBottom: "50px",
        border: "2px dashed red"
      }}>
       <Profile
        userName={username}
        userTag={tag} 
        location={location} 
        avatar={avatar} 
        followers={stats.followers} 
        views={stats.views} 
        likes={stats.likes} />
      </div>
      
      <div style={{
        backgroundColor: "rgb(167, 167, 167)",
        marginBottom: "50px",
        padding: "50px 0",
        border: "2px dashed red"
      }}>
      <Statistics title="Upload stats" stats={data} />
      </div>
      </>
  );
};
