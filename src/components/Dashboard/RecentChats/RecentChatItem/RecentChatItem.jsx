import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { doc, getDoc } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { TIME_FORMAT } from "../../../../consts";
import { auth, db } from "../../../../firebase";
import { createConversationDoc, getOtherUserDoc, getUserDoc } from "../../../../firebaseUtils";
import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import { RecentChatItemStyled } from "./RecentChatItem.styled";

const RecentChatItem = (props) => {
    const data = props.recentChat; // either a conversation or a user
    const isUser = props.isUser; // not a conversation, but a new user
    const [user, setUser] = useState(null);

    const handleClick = () => {
        if (!isUser) {
            props.onClick(data);
        } else {
            // TODO: we shuoldn't create a new conversation if one already exists
            createConversationDoc([doc(db, `users/${auth.currentUser.uid}`), doc(db, `users/${user.id}`)])
                .then(async (ref) => {
                    getDoc(ref)
                        .then((doc) => {
                            props.onClick({ ...doc?.data(), id: doc?.id });
                        })
                })
                .catch((err) => {
                    console.error(err);
                });
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