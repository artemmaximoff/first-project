import s from './about.module.css';
import userPhoto from '../../../assets/images/user.png';
import ProfileStatusWithHooks from '../../../components/status/statusWithHooks'
import { useState } from 'react';
import ProfileInfoForm from './profileInfoForm';


const About = ({ status, updateStatus, profile, isOwner, savePhoto, changeInfo, ...props }) => {


    let [editMode, setEditMode] = useState(false);


    const onMainPhotoSelected = (e) => {
        if (e.target.files[0]) {
            savePhoto(e.target.files[0])
        }
    }

    const Contact = ({ contactTitle, contactValue }) => {
        return (
            <div className={s.contact}>
                {contactTitle}:  {contactValue}
            </div>
        )
    }


    const ProfileInfo = ({ profile, isOwner, goToEditMode }) => {

        return <div className={s.info}>
            <span>Описание</span>
            {isOwner && <div><button onClick={goToEditMode} >Редактировать</button></div>}
            <div><span>Имя: </span>{profile.fullName}</div>
            <div><span>Обо мне: </span>{profile.aboutMe}</div>
            <div className={s.job}>
                <span>Ищет работу:</span>
                <span>
                    {profile.lookingForAJob
                        ? <img src='https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39.png' />
                        : <img src='https://www.meme-arsenal.com/memes/3bc1aa2e7e2b239a1731a76439adcaac.jpg' />}
                </span>
            </div>
            <div><span>Сфера деятельности: </span>{profile.lookingForAJobDescription}</div>
            <div>
                <span>Контакты:</span>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    }

    return (
        <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <div className={s.about}>
                <div>
                    <img src={profile.photos.large || userPhoto}></img>
                    <div>{isOwner && <input type={"file"} className={s.customfileinput} onChange={onMainPhotoSelected} ></input>}</div>
                </div>
                {editMode
                    ? <ProfileInfoForm profile={profile} changeInfo={changeInfo} setEditMode={setEditMode} />
                    : <ProfileInfo profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
            </div>
        </div>
    )

}


export default About;