import React from "react";
import s from './users.module.css';
import Paginator from "../common/paginator";
import User from './user'

let Users = ({ totalUsersCount, currentPage, pageSize, onPageChanged, users, portionSize = 10, ...props }) => {

    return (<div className={s.findUsers}>
        <Paginator
            totalItemsCount={totalUsersCount}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChanged={onPageChanged}
        />        <div>
            {users.map(u => <User
                follwingInProgress={props.follwingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
                user={u} key={u.id} />)}
        </div>
    </div>
    )
}

export default Users;