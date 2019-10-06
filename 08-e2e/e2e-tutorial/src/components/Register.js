
import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import userService from '../services/user.service';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('this field is required'),
    lastName: Yup.string().required('this field is required'),
});

export default () => {
    const [user, setUser] = useState(null);

    const handleSubmit = async (values) => {
        try {
            const user = await userService.createUser(values);
            setUser(user);
            // props.cb(user);

            // history.push('/dashboard');
        } catch(err) {

        }
    }

    return (
        <Formik
            initialValues={ {firstName: '', lastName: ''} }
            onSubmit={handleSubmit}
            validationSchema={RegisterSchema}
        >
            <Form>
                <div className="form-group">
                    <Field type="text" name="firstName" className="form-control" placeholder="First Name" />
                    <ErrorMessage component="div" className="alert alert-danger" name="firstName" />
                </div>
                <div className="form-group">
                    <Field type="text" name="lastName" className="form-control" placeholder="Last Name" />
                    <ErrorMessage component="div" className="alert alert-danger" name="lastName" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
                {
                    user && <div className="alert alert-success">{user.firstName}</div>
                }
            </Form>
        </Formik>
    )
}