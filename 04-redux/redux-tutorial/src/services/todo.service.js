
class TodoService {

    /**
     * @returns {Promise<Task[]>}
     */
    fetchTasks = async () => {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const tasks = await response.json();
        return tasks;
    }
}

export default new TodoService();