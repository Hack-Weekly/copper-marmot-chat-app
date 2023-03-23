import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { TIME_FORMAT } from "../../../../consts";
import { auth } from "../../../../firebase";
import { createConversationDoc, getOtherUserDoc, getUserDoc } from "../../../../firebaseUtils";
import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import { RecentChatItemStyled } from "./RecentChatItem.styled";

const RecentChatItem = (props) => {
    const data = props.recentChat; // either a conversation or a user
    const isUser = props.isUser; // not a conversation, but a new user
    const [user, setUser] = useState(null);

    const handleClick = async () => {
        if (!isUser) {
            props.onClick(data);
        } else {
            console.log(doc(`users/${auth.currentUser.uid}`), doc(`users/${user.id}`))
            createConversationDoc([doc(`users/${auth.currentUser.uid}`), doc(`users/${user.id}`)])
            // const participants = [getUserDoc(auth.currentUser.uid), getUserDoc(user.id)];
            // Promise.all(participants)
            //     .then((docs) => {
            //         createConversationDoc(docs.map((doc) => doc.data()));
            //     })
            //     .then((conversation) => {
            //         props.onClick(conversation);
            //     });
        }
    };

    useEffect(() => {
        if (!isUser) {
            getOtherUserDoc(data, auth.currentUser.uid)
                .then((doc) => {
                    setUser(doc.data());
                });
        } else {
            setUser(data);
        }
    }, []);

    return (
        <RecentChatItemStyled onClick={handleClick}>
            <div className={`container ${isUser && "user-ct"}`}>
                <ProfilePicture picture={user?.profilePicture} />
                <div className="info">
                    <div className="name">{user?.name}</div>
                    {!isUser && <div className="message">{data.lastMessage}</div>}
                </div>
                {!isUser && <div className="time">
                    {moment.unix(data.lastMsgTimestamp).format(TIME_FORMAT)}
                </div>}
                {isUser && <div className="chat-btn">
                    <FontAwesomeIcon icon={faCommentDots} />
                </div>}
            </div>
            <span className="seperator"></span>
        </RecentChatItemStyled>
    );
};

export default RecentChatItem;