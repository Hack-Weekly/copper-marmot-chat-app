import { addDoc, collection, doc, getDoc, getDocs, limit, query, setDoc, where } from 'firebase/firestore';
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
    const keywords = [...createKeywords(user.name), ...createKeywords(user.displayName), ...createKeywords(user.email)];

    return setDoc(doc(db, "users", user.uid), {
        name: user.displayName,
        userName: user.displayName,
        email: user.email,
        profilePicture: user.photoURL,
        keywords: keywords.filter(keywords => !!keywords),
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

/**
 * Creates an array of keywords,
 * which are lowercased prefixed strings of the given text, splitted into words.  
 * Used for search indexing
 * @param {*} text The text to create keywords for
 */
export const createKeywords = (text) => {
    if (!text)
        return [];

    text = text.toLowerCase();
    const keywords = [];
    let keyword = "";
    for (let i = 0; i < text.length; i++) {
        keyword += text[i];
        keywords.push(keyword);
    }

    if (!text.includes(" "))
        return keywords;

    let textSplitted = text.split(" ");
    textSplitted.shift(); // remove the first word, which is already generated by the previous step

    for (let i = 0; i < textSplitted.length; i++) {
        keyword = "";
        for (let j = 0; j < textSplitted[i].length; j++) {
            keyword += textSplitted[i][j];
            keywords.push(keyword);
        }
    }

    return keywords;
}

/**
 * Searches the given collection for documents that contain the given keyword in the "keywords" field
 * @param {*} colllectionName The collection to search in
 * @param {*} keyword The keyword to search for
 * @returns 
 */
export const searchByKeyword = async (collectionName, keyword, limitTo = 50) => {
    const docs = await getDocs(query(
        collection(db, collectionName),
        where("keywords", "array-contains", keyword),
        limit(limitTo)
    ));

    console.log(docs.docs);

    return docs.docs;
}