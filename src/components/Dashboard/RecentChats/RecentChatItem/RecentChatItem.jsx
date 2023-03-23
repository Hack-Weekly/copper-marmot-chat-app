import moment from "moment";
import { useEffect, useState } from "react";
import { TIME_FORMAT } from "../../../../consts";
import { auth } from "../../../../firebase";
import { getOtherUserDoc } from "../../../../firebaseUtils";
import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import { RecentChatItemStyled } from "./RecentChatItem.styled";

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