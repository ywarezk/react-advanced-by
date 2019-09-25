import React from 'react';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import {setMessage} from '../redux/actions/hello.actions';

const SendMessage = ({ setMyMessage }) => {
    const handleSubmit = (values) => {
        console.log(values);
        setMyMessage(values.message);
    }

    return (
        <Formik
            initialValues={ { message: 'hello'} }
            onSubmit={handleSubmit}
        >
            <Form>
                <Field type="text" name="message" />
                <button type="submit">Send Message</button>
            </Form>
        </Formik>
    )
}

export default connect(
    null,
    {
        setMyMessage: setMessage
    }
)(SendMessage);
