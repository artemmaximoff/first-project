import React from "react";
import s from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';



let User = ({ follow, unfollow, follwingInProgress, user, ...props }) => {

    return (<div className={s.findUsers}>
        <div>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.photo} alt="" />
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={follwingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                        /*props.togglefollwingInProgress(true, u.id);
                        usersAPI.unfollow(u.id).then(response => {
                            if (response.data.resultCode == 0) {
                                props.unfollowSuccessed(u.id)
                            }
                            props.togglefollwingInProgress(false, u.id)
                        })*/
                    }}>Unfollow</button>
                    : <button disabled={follwingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                        /*props.togglefollwingInProgress(true, u.id);
                        usersAPI.follow(u.id).then(response => {
                            if (response.data.resultCode == 0) {
                                props.followSuccessed(u.id)
                            }
                            props.togglefollwingInProgress(false, u.id)
                        })*/
                    }}>Follow</button>}
            </div>
        </div>
        <div>
            <span>
                <div>{user.name}</div>
                <div>{user.id}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
            </span>
        </div>

    </div>
    )
}

export default User;