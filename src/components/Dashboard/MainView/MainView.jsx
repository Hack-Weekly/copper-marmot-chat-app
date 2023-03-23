import { useEffect, useState } from "react";
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
} from "firebase/firestore";

const MainView = () => {
  const [messages, setMessages] = useState([1, 2, 3, 4, 5, 6]);
  const { displayName, uid } = auth.currentUser;

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages.reverse());
    });
    return () => unsubscribe;
  }, []);

  function formatDateFromSeconds(seconds) {
    const date = new Date(seconds * 1000);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month} ${hours}:${minutes}`;
  }

  return (
    <MainViewStyled>
      <div className="header">
        <ProfilePicture />
        <div className="info">
          <div className="name">{displayName}</div>
          <div className="current-status">Typing...</div>
        </div>
      </div>
      <span className="seperator"></span>
      <div className="messages-ct">
        {messages.map((message, index) => (
          <Message
            key={index}
            isMine={message.uid === uid}
            message={{
              isMine: message.uid === uid,
              content: message.text,
              timestamp: message.createdAt
                ? formatDateFromSeconds(message.createdAt.seconds)
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
