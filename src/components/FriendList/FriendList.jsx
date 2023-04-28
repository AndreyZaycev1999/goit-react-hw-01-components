import React from "react";
import PropTypes from "prop-types";
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {

    const classNames = (isOnline) => {
        const names =[css.status];
        if (isOnline) names.push(css.isOnline)
        return names;
    };

    const addFriends = ({ avatar, name, isOnline, id }) => {
    return <li key={id} className={css.item}>
        <span className={classNames(isOnline).join(" ")}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
    };

    addFriends.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
    };

    return (
        <ul className={css.friendList}>
            {friends.map((friend) => addFriends(friend))} 
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;