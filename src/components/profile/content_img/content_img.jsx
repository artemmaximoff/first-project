
import s from './content-img.module.css';


const ContentImg = () => {
    return (
        <div className={s.content}>
            <div className={s.content__image}>
                <img src="https://user-images.githubusercontent.com/88069082/149673405-b47f71c1-0777-4038-9247-5b0c9d166f22.jpg"></img>
            </div>
        </div>
    )
}

export default ContentImg;