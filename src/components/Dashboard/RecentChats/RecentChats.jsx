import { collection, DocumentReference, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db, auth } from '../../../firebase';
import { UserContext } from "../../../pages/Main";
import { ConversationContext } from "../Dashboard";
import RecentChatItem from "./RecentChatItem/RecentChatItem";
import { RecentChatsStyled } from "./RecentChats.styled";
import SearchBar from './SearchBar/SearchBar';

const RecentChats = (props) => {
    const [recentChats, setRecentChats] = useState([]);
    const currentConversation = useContext(ConversationContext);
    const setCurrentConversation = props.setCurrentConversation;
    const { displayName, uid } = auth.currentUser;
    const userDoc = useContext(UserContext);

    const handleRecentChatClick = (recentChat) => {
        if (currentConversation?.id !== recentChat.id)
            setCurrentConversation(recentChat);
    }

    useEffect(() => {
        if (!userDoc)
            return;

        const q = query(
            collection(db, "conversations"),
            where("participants", "array-contains", userDoc.ref),
            orderBy("lastMsgTimestamp", "desc"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let recentChats = [];
            QuerySnapshot.forEach((doc) => {
                recentChats.push({ ...doc.data(), id: doc.id });
            });


            console.log(recentChats)

            setRecentChats(recentChats);
        });

        // setRecentChats([{
        //     name: "John Doe",
        //     lastMessage: "Hello, how are you?",
        //     lastMessageDate: 1679580261,
        // }])
    }, [userDoc])

    return (
        <RecentChatsStyled>
            <SearchBar />
            <div className="recent-chats-ct">
                {recentChats.map((recentChat, index) => (
                    <RecentChatItem recentChat={recentChat} key={index} onClick={handleRecentChatClick} />
                ))}
            </div>
        </RecentChatsStyled>
    );
}

export default RecentChats;