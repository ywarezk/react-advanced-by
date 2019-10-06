
import React, {useState} from 'react';


export default function Hello(props) {
    const isVisibleArray = useState(true)
    const isVisible = isVisibleArray[0];
    const setIsVisible = isVisibleArray[1];

    // const [message, setMessage] = useState('hello');
    

    // const [fullState, setFullState] = useState({
    //     isVisible : true,
    //     message: 'hello'
    // })

    const toggleVisibility = () => {
        //alert('hello');
        setIsVisible(!isVisible);
    }

    return (
        <>
            {
                isVisible && <h1>Hello World from component {props.message}</h1>
            }
            <button onClick={toggleVisibility}>Toggle Visibility</button>
        </>
    )
}

Hello.propTypes = {

}

Hello.defaultProps = {
    
}
