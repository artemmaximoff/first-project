import s from './new-message.module.css';
import React from 'react';
import { Formik, Form, Field } from "formik";


const NewMessage = (props) => {

    let sendMessage = (newMessageBody) => {
        props.sendMessage(newMessageBody);
    }

    return (
        <div className={s.newMessage} >
            <Formik
                initialValues={{
                    newMessageBody: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    sendMessage(values.newMessageBody)
                    console.log(values.newMessageBody)
                    resetForm({ values: '' });
                }}
            >
                {() => (
                    <Form>
                        <div>
                            <Field
                                name={'newMessageBody'}
                                type={'text'}
                                as={'textarea'}
                                placeholder={'Enter new message'}
                            />
                        </div>

                        <button className={s.button} type={'submit'}>Send</button>
                    </Form>
                )}

            </Formik>
        </div >

    )
}

export default NewMessage;