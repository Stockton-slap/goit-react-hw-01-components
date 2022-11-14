import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import Friend from 'components/Friend/Friend';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, id, isOnline, name }) => {
        return (
          <Friend key={id} avatar={avatar} isOnline={isOnline} name={name} />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
