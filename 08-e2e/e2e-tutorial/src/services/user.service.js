import axios from 'axios';

class UserService {

    createUser = async (values) => {
        const response = await axios.post('https://academeez-chat.herokuapp.com/api/users/', values);
        return response.data;
    }
}

export default new UserService();