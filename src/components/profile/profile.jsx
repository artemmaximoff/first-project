
import s from './profile.module.css';
import About from './about/about';
import MyPosts from './myposts/my_posts';
import ContentImg from './content_img/content_img'
import Preloader from '../common/preloader/preloader';



const Profile = ({ profile, status, updateStatus, isOwner, savePhoto, changeInfo }) => {


    if (!profile) return <Preloader />

    return (
        <div>
            {/*<ContentImg />*/}
            <About profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} savePhoto={savePhoto} changeInfo={changeInfo} />
            <MyPosts />
        </div>
    )
}

export default Profile;