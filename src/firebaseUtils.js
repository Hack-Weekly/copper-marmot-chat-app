import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from './firebase';

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

/**
 * Returns the user document from the users collection, y the given user id
 * @param {*} userId
 */
export const getUserDoc = (userId) => {
    return getDoc(doc(db, "users", userId));
}

/**
 * Creates a user document in the users collection, with default data
 * @param {*} user Auth user object
 */
export const createUserDoc = (user) => {
    setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        userName: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
    });
}

/**
 * Creates a conversation document in the conversations collection, with the given participants.
 * If a conversation already exists with the same participants, it will return that conversation.
 * @param {*} participants Array of user documents
 */
export const createConversationDoc = async (participants) => {
    const docs = await getDocs(query(
        collection(db, "conversations"),
        where("participants", "==", participants)
    ));

    if (!docs.empty) {
        return docs.docs.shift();
    }

    const add = await addDoc(collection(db, "conversations"), {
        participants: participants,
        lastMsgTimestamp: null
    });

    return await getDoc(add);
}
