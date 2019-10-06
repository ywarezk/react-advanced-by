/**
 * redux state => {message: '...'}
 * setMessage => 
 */


 import React from 'react';
 import { connect } from 'react-redux';
 import {setMessage} from '../../redux/actions';

 const Message =  ({messageFromRedux, setReduxMessage}) => {
    const changeTheMessage = () => {
        setReduxMessage('new message');
    }

    return (
        <>  
            <h1>{messageFromRedux}</h1>
            <button onClick={changeTheMessage}>change message</button>
        </>
    )
 }

 export default connect(
     (state) => {
        return {
            messageFromRedux: state.message
        }
     },
     {
        setReduxMessage: setMessage
     }
 )(Message);

