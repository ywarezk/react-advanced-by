

class TodoService {

    /**
     * @returns {Promise<content from server>}
     */
    // getTasks = () => {
    //     return fetch('https://nztodo.herokuapp.com/api/task/?format=json').then((response) => {
    //         return response.json()
    //     }).then((json) => {

    //     })
    // }

    /**
     * @returns {Promise<content from server>}
     */
    getTasks = async () => {
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const json = await response.json();
        return json;
    }
}

// const TodoService = 

export default new TodoService();