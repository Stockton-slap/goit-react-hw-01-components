import css from './FriendList.module.css'
import PropTypes from "prop-types";


const FriendList = ({ friends }) => {
    
    return <ul className={css.friendList}>
        {friends.map(({ avatar, id, isOnline, name }) => {
            
            return <li key={id} className={css.friendItem}>
                <span className={css.status}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
            </li>
        })}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape)
}

export default FriendList;



