import React, {useContext} from 'react';
import {Formik, Form, Field} from 'formik';
import messageService from '../services/message.service';
import MessageContext from '../message.context';

export default (props) => {
    const context = useContext(MessageContext);

    const handleSubmit = (values) => {
        console.log(values);
        // props.setMessageCB(values.message);
        // messageService.message$.next(values.message);

        context.setMessage(values.message);
    }

    return (
        <Formik
            initialValues={ {message : 'initial message'} }
            onSubmit={handleSubmit}
        >
            <Form>
                <Field type="text" name="message" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}