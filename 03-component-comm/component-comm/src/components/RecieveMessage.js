import React, {useEffect, useState, useContext} from 'react';
import messageService from '../services/message.service';
import MessageContext from '../message.context';

export default () => {
    // const [message, setMessage] = useState('Initial Message');

    const context = useContext(MessageContext);

    // useEffect(() => {
    //     messageService.message$.subscribe((newMessage) => {
    //         setMessage(newMessage)
    //     })
    // }, [])

    return (
        <h1>{context.message}</h1>
    )
}