

export const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(msg) {
    return {
        type: SET_MESSAGE,
        payload: msg
    }
}