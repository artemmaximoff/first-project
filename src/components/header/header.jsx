import { NavLink } from 'react-router-dom';
import s from './header.module.css';

const Header = (props) => {

    return (
        <header className={s.header}>
            <NavLink to="/">
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png'></img>
                </div>
            </NavLink>
            <div className={s.loginBlock}>{
                props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>
            }

            </div>
        </header>)
}

export default Header;