import React, {useState, Suspense} from 'react';
// import MoveToHome from './MoveToHome';

export default (props) => {
    // console.log(props);

    const [LazyComponent, setLazyComponent] = useState(null);

    /**
     * lazy load a component
     */
    const handleClick = () => {
        const LazyLoadedComponent = React.lazy(() => import('./MoveToHome'));
        setLazyComponent(LazyLoadedComponent);
    }

    return (
        <>
            <h1>hello im oin the todo page {props.match.params.todoId}</h1>
            {/* <button onClick={() => props.history.push('/')}>move to homepage</button> */}
            {/* <MoveToHome /> */}
            <button onClick={handleClick}>
                Lazy load component
            </button>
            {
                LazyComponent && <Suspense fallback={<h1>Loading...</h1>}><LazyComponent /></Suspense>
            }
        </>
    )
}