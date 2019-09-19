import React from 'react';
import todoService from '../services/todo.service';

export default class Todo extends React.Component {
    state = {
        tasks: [],
        // message: 'hello'
    }

    async componentDidMount() {
        const tasks = await todoService.getTasks();
        this.setState({
            // tasks: tasks
            tasks,
            // message
        });
    }

    render() {
        return (
            <ul>
                {
                    this.state.tasks.map((taskObj) => {
                        return (
                            <li key={taskObj.id}>{taskObj.title}</li>
                        );
                    })
                }
                
                {/* <li>this list should be dynamic</li> */}
            </ul>
        )
    }
}