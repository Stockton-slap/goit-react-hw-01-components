import css from './Friend.module.css';
import PropTypes from 'prop-types';

const Friend = ({ avatar, isOnline, name }) => {
  const classNames = [css.status];

  if (isOnline) {
    classNames.push(css.isOnlineStatus);
  }

  return (
    <li className={css.friendItem}>
      <span className={classNames.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default Friend;

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
