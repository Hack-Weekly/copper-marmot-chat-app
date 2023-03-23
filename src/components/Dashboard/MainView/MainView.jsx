import {
  collection, limit, onSnapshot, orderBy, query
} from "firebase/firestore";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { DATE_FORMAT, TIME_FORMAT } from "../../../consts";
import { auth, db } from "../../../firebase";
import { getOtherUserDoc } from "../../../firebaseUtils";
import { isToday } from "../../../utils";
import { ConversationContext } from "../Dashboard";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { MainViewStyled } from "./MainView.styled";
import { Message } from "./Message/Message";
import { MessageBar } from "./MessageBar/MessageBar";

const MainView = (props) => {
  const [messages, setMessages] = useState([]);
  const { displayName, uid } = auth.currentUser;
  const currentConversation = useContext(ConversationContext);
  const [currentConversationUser, setCurrentConversationUser] = useState(null);

  const startFirebaseMsgsListener = () => {
    const q = query(
      collection(db, "conversations", currentConversation.id, "messages"),
      orderBy("timestamp", "desc"),
      limit(50)
    );

    return onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });
  }

  useEffect(() => {
    if (!currentConversation)
      return;

    getOtherUserDoc(currentConversation, uid)
      .then((doc) => {
        setCurrentConversationUser(doc.data());
      });

    const messagesUnsub = startFirebaseMsgsListener();

    return () => {
      messagesUnsub();
    }
  }, [currentConversation]);

  if (!currentConversation) {
    return (
      <MainViewStyled>
        {/* TODO: create an empty state? */}
      </MainViewStyled>
    );
  }

  return (
    <MainViewStyled>
      <div className="header">
        <ProfilePicture picture={currentConversationUser?.profilePicture} />
        <div className="info">
          <div className="name">{currentConversationUser?.name}</div>
          <div className="current-status"></div> {/* Typing goes here*/}
        </div>
      </div>
      <span className="seperator"></span>
      <div className="messages-ct">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={{
              isMine: message.senderId === uid,
              content: message.text,
              timestamp: message.timestamp
                ? isToday(message.timestamp.seconds) ? moment.unix(message.timestamp.seconds).format(TIME_FORMAT) : moment.unix(message.timestamp.seconds).format(DATE_FORMAT)
                : moment().format(TIME_FORMAT)
            }}
          />
        ))}
      </div>
      <MessageBar />
    </MainViewStyled>
  );
};

export default MainView;
