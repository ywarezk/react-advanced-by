import React from 'react';
import {useHistory, withRouter} from 'react-router-dom';

const MoveToHome = ({history}) => {
    // console.log(props);

    // let history = useHistory();

    return (
        <button onClick={() => history.push('/')}>
            go to home
        </button>
    )
}

export default withRouter(MoveToHome);
