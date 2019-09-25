
/**
 * how does action in redux look like?
 * {type : string, payload? : any}
 */

export const SET_MESSAGE = '[hello] SET_MESSAGE';

 export function setMessage(newMessage) {
     return {
         type: SET_MESSAGE,
         payload: newMessage
     }
 }