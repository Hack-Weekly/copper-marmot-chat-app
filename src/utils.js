import moment from 'moment';
import { getDoc } from 'firebase/firestore';

export const isToday = (timestamp) => {
    return moment.unix(timestamp).isSame(moment(), "day");
}

/**
 * Returns the other user in the conversation (which isn't the current user)
 * (this won't work for group chats, will have to change to logic, 
 *  or maybe have the groups be inside the same collection as users but name it differently?)
 */
export const getOtherUserDoc = async (conversationDoc, currentUserId) => {
    const otherUser = conversationDoc.participants.find(
        (participant) => participant.id !== currentUserId
    );

    return otherUser ? getDoc(otherUser) : null;
}

/** console log with a green background */
export const consoleLogGreen = (text) => {
    console.log(`%c${text}`, "background: green; color: white");
}
