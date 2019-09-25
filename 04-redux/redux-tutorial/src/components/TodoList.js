import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {fetchTasks} from '../redux/actions/todo.actions';

const TodoList = ({mytasks, fetchTasks, isLoading}) => {
    useEffect(() => {
        fetchTasks();
    }, [fetchTasks])

    return (
        <ul>
            {
                isLoading ? <h1>Loading...</h1> : Object.values(mytasks).map((singleTask) => {
                    return (
                        <li key={singleTask.id}>
                            {singleTask.title}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default connect(
    state => ({
        mytasks : state.todo.tasks,
        isLoading: state.todo.isLoading
    }),
    {
        fetchTasks
    }
)(TodoList)