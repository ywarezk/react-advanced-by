import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup'

const loginSchema = yup.object().shape({
    email: yup.string().required('This field is required').email('Bad email forms'),
    password: yup.string().required('This field is required').min(4, "more than 4 characters")
});

export default () => {
    // values => {email: '...', password: '...'}
    const handleSubmit = (values) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={ {email: 'yariv@nerdeez.com', password: '12345'} }
            onSubmit={handleSubmit}
            validationSchema={loginSchema}
        >
            <Form style={ {width: '400px'} }>
                <div className="form-group">
                    <Field className="form-control" type="email" name="email" />
                    <ErrorMessage name="email" className="alert alert-danger" component="div" />
                </div>
                <div className="form-group">
                    <Field className="form-control" type="password" name="password" />
                    <ErrorMessage name="password" className="alert alert-danger" component="div" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
                
            </Form>
        </Formik>
    )
}