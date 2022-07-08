import { NavLink } from 'react-router-dom';
import s from './friend.module.css'

const Friend = (props) => {


    return (
        <div className={s.friend}>
            <img src={props.img} alt="" />
            <div>{props.name}</div>
        </div>
    )
}

export default Friend;