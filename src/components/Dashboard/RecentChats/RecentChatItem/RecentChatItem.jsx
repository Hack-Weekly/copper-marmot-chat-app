import { RecentChatItemStyled } from "./RecentChatItem.styled";
import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import moment from "moment";
import { TIME_FORMAT } from "../../../../consts";
import { useContext, useEffect, useState } from "react";
import { consoleLogGreen, getOtherUserDoc } from "../../../../utils";
import { ConversationUserContext } from "../../Dashboard";
import { auth } from "../../../../firebase";

const RecentChatItem = (props) => {
    const chat = props.recentChat;
    const [user, setUser] = useState(null);

    useEffect(() => {
        getOtherUserDoc(chat, auth.uid)
            .then((doc) => {
                setUser(doc.data());
            });
    }, []);

    return (
        <RecentChatItemStyled onClick={() => props.onClick(chat)}>
            <div className="container">
                <ProfilePicture picture={user?.profilePicture} />
                <div className="info">
                    <div className="name">{user?.name}</div>
                    <div className="message">{chat.lastMessage}</div>
                </div>
                <div className="time">{moment.unix(chat.lastMsgTimestamp).format(TIME_FORMAT)}</div>
            </div>
            <span className="seperator"></span>
        </RecentChatItemStyled>
    );
};

export default RecentChatItem;