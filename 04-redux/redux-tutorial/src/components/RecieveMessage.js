import React from 'react';
import {connect} from 'react-redux';

const RecieveMessage = (props) => {
    return (
        <h1>{props.messageFromState}</h1>
    )
}

const StrogerRecieveMessage = connect(
    (state) => {
        return {
            messageFromState: state.hello.message
        }
    }
)(RecieveMessage);
export default StrogerRecieveMessage;