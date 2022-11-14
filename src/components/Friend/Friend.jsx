import css from './Friend.module.css';

const Friend = ({ avatar, id, isOnline, name }) => {
  const classNames = [css.status];

  if (isOnline) {
    classNames.push(css.isOnlineStatus);
  }
  return (
    <li key={id} className={css.friendItem}>
      <span className={classNames.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

export default Friend;
