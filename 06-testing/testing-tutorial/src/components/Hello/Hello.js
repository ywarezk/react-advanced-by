import React from 'react';

const Hello = (props) => {
    return (
        <h1>{props.message}</h1>
    )
}

Hello.defaultProps = {
    message: 'hello default message'
}

export default Hello;