import {Subject} from 'rxjs';

class MessageService {
    message$ = new Subject();
}

export default new MessageService();