import { Formik, Form, Field, ErrorMessage } from "formik";
import s from './about.module.css';
import * as Yup from "yup";

const ProfileInfoForm = ({ profile, changeInfo, setEditMode, ...props }) => {

    debugger;
    return <div className={s.info} autoFocus={true}
    >
        <span>Описание</span>
        <div><button onClick={() => setEditMode(false)}>Cancel</button></div>
        <div>
            <Formik
                initialValues={profile}
                validateOnBlur
                onSubmit={(values, onSubmitProps) => {

                    changeInfo(values, onSubmitProps.setStatus).then(
                        () => setEditMode(false)
                    )

                }}
            >
                {(error) => (
                    <Form>

                        <div >{error.status && <div className={s.error} >{error.status + ','}</div>}</div>
                        <div className={s.field}>

                            <div>Имя: </div>
                            <Field
                                name={'fullName'}
                                type={'text'}
                                as={'textarea'}
                                placeholder={''}

                            />
                        </div>
                        <div className={s.field}>
                            <div>Обо мне: </div>
                            <Field
                                name={'aboutMe'}
                                type={'text'}
                                as={'textarea'}
                                placeholder={''}
                            />
                        </div>
                        <div className={s.field}>
                            <div>Ищет работу: </div>
                            <label>
                                <Field type="checkbox" name="lookingForAJob" />
                            </label>
                        </div>
                        <div className={s.field}>
                            <div>Сфера деятельности: </div>
                            <Field
                                name={'lookingForAJobDescription'}
                                type={'text'}
                                as={'textarea'}
                                placeholder={''}
                            />
                        </div>
                        <div>
                            <div>Контакты:</div>{Object.keys(profile.contacts).map(key =>
                                <div className={s.field}>
                                    <div>{key}</div>
                                    <Field
                                        name={'contacts.' + key}
                                        type={'text'}
                                        as={'textarea'}
                                        placeholder={key}
                                    />
                                </div>)}
                        </div>

                        <button className={s.button} type={'submit'}>Save</button>
                    </Form>
                )}
            </Formik>
        </div>



    </div >
}

export default ProfileInfoForm