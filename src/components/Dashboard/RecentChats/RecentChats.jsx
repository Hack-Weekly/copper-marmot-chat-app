import { useEffect, useState } from "react";
import RecentChatItem from "./RecentChatItem/RecentChatItem";
import { RecentChatsStyled } from "./RecentChats.styled";
import SearchBar from './SearchBar/SearchBar';

const RecentChats = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        setChats([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }, [chats])


    return (
        <RecentChatsStyled>
            <SearchBar />
            <div className="recent-chats-ct">
                {chats.map(chat => (
                    <RecentChatItem chat={chat} />
                ))}
            </div>
        </RecentChatsStyled>
    );
}

export default RecentChats;