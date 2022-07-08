import React from 'react';
import { Formik, Form, Field, ErrorMessage, setFieldValue } from "formik";
import s from './login.module.css';
import * as Yup from "yup";
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom'


const validateLoginForm = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Введите почту';

    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Введите почту';
    }
    return errors;
};

const validationSchemaLoginForm = Yup.object().shape({

    password: Yup.string()
        .min(5, "Должно быть более 5 символов")
        .required("Поле обязательно")
});


const LoginForm = (props) => {

    return (
        <div>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false
                }}
                validate={validateLoginForm}
                validationSchema={validationSchemaLoginForm}
                validateOnBlur
                onSubmit={(values, onSubmitProps) => {

                    console.log(values.email, values.password, values.rememberMe, values.captcha, onSubmitProps.setStatus)
                    props.login(values.email, values.password, values.rememberMe, values.captcha, onSubmitProps.setStatus)
                }}
            >
                {(error) => (
                    <Form>
                        <div>
                            <Field
                                className={s.field}
                                name={'email'}
                                type={'text'}
                                placeholder={'email'} />
                        </div>
                        <ErrorMessage className={s.error} name="email" component="span" />
                        <div>
                            <Field
                                className={s.field}
                                name={'password'}
                                type={'password'}
                                placeholder={'password'} />
                        </div>
                        <ErrorMessage name="password" component="span" className={s.error} />
                        <div>
                            {error.status
                                ? <div className={s.error}>{error.status}</div>
                                : <div>
                                    <Field
                                        type={'checkbox'}
                                        name={'rememberMe'}
                                        id='rememberMe' />
                                    <label htmlFor={'rememberMe'}> remember me </label>
                                </div>
                            }
                        </div>
                        <div>
                            {props.captchaUrl && <img src={props.captchaUrl}></img>}
                            {props.captchaUrl && <div><Field
                                name={'captcha'}
                                type={'text'}
                                placeholder={''} /></div>}
                        </div>
                        <button className={s.button} type={'submit'} >Login</button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

const Login = (props) => {
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props} />
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}


export default connect(mapStateToProps, { login })(Login);