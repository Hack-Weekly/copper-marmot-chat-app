import { collection, DocumentReference, endAt, getDocs, limit, onSnapshot, orderBy, query, startAt, where } from "firebase/firestore";
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
    const [searchQuery, setSearchQuery] = useState("");

    const handleRecentChatClick = (data) => {
        if (data)

        if (currentConversation?.id !== data.id)
            setCurrentConversation(data);
    }

    const startFirebaseRecentChatsListener = () => {
        const q = query(
            collection(db, "conversations"),
            where("participants", "array-contains", userDoc.ref),
            orderBy("lastMsgTimestamp", "desc"),
            limit(50)
        );

        return onSnapshot(q, (QuerySnapshot) => {
            let recentChats = [];
            QuerySnapshot.forEach((doc) => {
                recentChats.push({ ...doc.data(), id: doc.id });
            });

            setRecentChats(recentChats);
        });
    }

    useEffect(() => {
        if (!userDoc)
            return;

        if (searchQuery.length > 0) {
            setRecentChats([]);
            console.log("searching")
            getDocs(query(
                collection(db, "users"),
                orderBy("name"),
                startAt(searchQuery),
                endAt(searchQuery + "\uf8ff"),
                limit(50)
            ))
                .then((QuerySnapshot) => {
                    let recentChats = [];
                    QuerySnapshot.forEach((doc) => {
                        recentChats.push({ ...doc.data(), id: doc.id });
                        console.log(recentChats);
                    });

                    setRecentChats(recentChats);
                })
                .catch((error) => {
                    console.log(error);
                });
            return;
        }

        const recentChatsUnsub = startFirebaseRecentChatsListener();

        return () => {
            recentChatsUnsub();
        }
    }, [userDoc, searchQuery])

    return (
        <RecentChatsStyled>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="recent-chats-ct">
                {recentChats.map((recentChat, index) => (
                    <RecentChatItem recentChat={recentChat} key={index} onClick={handleRecentChatClick} isUser={searchQuery.length > 0} />
                ))}
            </div>
        </RecentChatsStyled>
    );
}

export default RecentChats;