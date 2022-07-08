import { NavLink } from 'react-router-dom';
import s from './navbar.module.css'
import Friends from './friends/friends';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.link}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.link}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={navData => navData.isActive ? s.active : s.link}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={navData => navData.isActive ? s.active : s.link}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.link}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={navData => navData.isActive ? s.active : s.link}>Find Users</NavLink>
            </div>
            <Friends />
        </nav >
    )
}

export default Navbar;