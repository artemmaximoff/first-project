import React from 'react';
import s from './new_post.module.css';
import { Formik, Form, Field } from "formik";


const NewPost = (props) => {


    let addPost = (newPostBody) => {
        props.addPost(newPostBody);
    }


    return (
        <div className={s.newPost}>
            <Formik
                initialValues={{
                    newPostBody: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values.newPostBody)
                    addPost(values.newPostBody)
                    resetForm({ values: '' });
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                name={'newPostBody'}
                                type={'text'}
                                as={'textarea'}
                                placeholder={'Enter new message'}
                            />
                        </div>
                        <button className={s.newPostBtn} type={'submit'}>Send</button>
                    </Form>
                )}

            </Formik>
        </div >
    )
}

export default NewPost; 