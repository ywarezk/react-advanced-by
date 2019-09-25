import todoService from '../../services/todo.service';

export const SET_TASKS = '[todo] SET_TASKS';
export const SET_IS_LOADING = '[todo] SET_IS_LOADING';

export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        payload: isLoading
    }
}

export function fetchTasks() {
    return async function(dispatch) {
        dispatch(setIsLoading(true));
        const tasks = await todoService.fetchTasks();
        dispatch(setTasks(tasks));
        dispatch(setIsLoading(false));
    }
}