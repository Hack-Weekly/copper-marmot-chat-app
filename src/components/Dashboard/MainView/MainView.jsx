import { useState } from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { MainViewStyled } from "./MainView.styled";
import { Message } from "./Message/Message";
import { MessageBar } from "./MessageBar/MessageBar";

const MainView = () => {
    const [messages, setMessages] = useState([1, 2, 3, 4, 5, 6]);

    return (
        <MainViewStyled>
            <div className="header">
                <ProfilePicture />
                <div className="info">
                    <div className="name">Joel Miller</div>
                    <div className="current-status">Typing...</div>
                </div>
            </div>
            <span className="seperator"></span>
            <div className="messages-ct">
                {messages.map((message, index) => (
                    <Message key={index} isMine={Math.random() < 0.5} message={{
                        isMine: Math.random() < 0.5,
                        content: "You coming over tonight? I love eating tasty food, it makes me feel good yummy yummy yk",
                        timestamp: "12:00 PM"
                    }} />
                ))}
            </div>

            <MessageBar />
        </MainViewStyled>
    );
}

export default MainView;