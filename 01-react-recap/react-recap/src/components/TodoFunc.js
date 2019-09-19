import React, {useState, useEffect} from 'react';
import todoService from '../services/todo.service';

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [counter, setCounter] = useState(5);

    /**
     * componentDidMount, componentDidUpdate, componentWillUnmount
     */
    useEffect(() => {
        debugger;
        todoService.getTasks().then((data) => {
            setTasks(data);
        });

        return () => {

        }
    }, []);


    useEffect(() => {
        debugger;
        console.log('useEffect counter');
        const intervalId = setInterval(() => {
            console.log('timer is running ' + counter);
            if (counter <= 0) return;            
            setCounter(counter - 1);
        }, 1000);

        return () => {
            clearInterval(intervalId)
            console.log('cleanup');
        }
    }, [counter])

    return (
        <ul>
            {
                tasks.map((taskObj) => {
                    return (
                        <li key={taskObj.id}>{taskObj.title}</li>
                    );
                })
            }
        </ul>
    )
}