import css from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({
  userName,
  userTag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={userName} className={css.avatar} />
        <p className={css.name}>{userName}</p>
        <p className={css.tag}>{userTag}</p>
        <p className={css.location}>{location}</p>

        <ul className={css.stats}>
          <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  userTag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
