import React from "react";
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {

    function classNames(isOnline) {
        const names =[css.status];
        if (isOnline) names.push(css.isOnline)
        return names;
    };

    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li key={id} className={css.item}>
                    <span className={classNames(isOnline).join(" ")}></span>
                    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{name}</p>
                </li>
            ))} 
        </ul>
    );
};

export default FriendList;