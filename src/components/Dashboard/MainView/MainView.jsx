import { useContext, useEffect, useState } from "react";
import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { MainViewStyled } from "./MainView.styled";
import { Message } from "./Message/Message";
import { MessageBar } from "./MessageBar/MessageBar";
import { auth, db } from "../../../firebase";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
} from "firebase/firestore";
import moment from "moment";
import { DATE_FORMAT, TIME_FORMAT } from "../../../consts";
import { isToday } from "../../../utils";
import { map } from "@firebase/util";
import { ConversationContext } from "../Dashboard";

const MainView = (props) => {
  const [messages, setMessages] = useState([]);
  const { displayName, uid } = auth.currentUser;
  const currentConversation = useContext(ConversationContext);

  useEffect(() => {
    if (!currentConversation)
      return;

    const q = query(
      collection(db, "conversations", currentConversation.id, "messages"),
      orderBy("timestamp", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMessages(messages);
    });

    return () => unsubscribe;
  }, [currentConversation]);

  if (!currentConversation) {
    return (
      <MainViewStyled />
    );
  }

  return (
    <MainViewStyled>
      <div className="header">
        <ProfilePicture />
        <div className="info">
          <div className="name">{displayName}</div> {/* TODO: make this be the current conversation user name instead of our own */}
          <div className="current-status">Typing...</div>
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
                ? isToday(message.timestamp.seconds) ? moment(message.timestamp.seconds).format(TIME_FORMAT) : moment(message.timestamp.seconds).format(DATE_FORMAT)
                : "",
            }}
          />
        ))}
      </div>
      <MessageBar />
    </MainViewStyled>
  );
};

export default MainView;
