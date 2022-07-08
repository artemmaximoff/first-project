import './App.css';
import { connect } from 'react-redux';
import React from 'react';
import Navbar from './components/navbar/navbar';
import Settings from './components/settings/settings';
import News from './components/news/news';
import Music from './components/music/music';
import { Navigate, Route, Routes } from 'react-router-dom';
import UsersContainer from './components/users/users_container';
import HeaderContainer from './components/header/header_container';
import LoginForm from './components/login/login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/preloader';

const DialogsContainer = React.lazy(() => import('./components/dialogs/dialogs_container'));
const ProfileContainer = React.lazy(() => import('./components/profile/profileContiner'));


class App extends React.Component {
  catchAllUnhandeledErrors = (reason, promise) => {
    alert("some Error occured");
    //console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandeledErrors);
  }
  componetnWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandeledErrors);
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (

      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <React.Suspense fallback={<Preloader />}>
            <Routes>
              <Route exact path='/' element={<Navigate to="/profile" />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/profile/:userId' element={<ProfileContainer />} />
              <Route path='/profile/' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='*' element={<div>404 PAGE NOT FOUND</div>} />
            </Routes>
          </React.Suspense>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appInitialize.initialized
})





export default (connect(mapStateToProps, { initializeApp })(App))

