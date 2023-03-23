import { MessageBarStyled } from "./MessageBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import React, { useContext, useState } from "react";
import { auth, db } from "../../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ConversationContext } from "../../Dashboard";

export const MessageBar = () => {
  const [message, setMessage] = useState("");
  const currentConversation = useContext(ConversationContext);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      return;
    }

    const { uid, displayName, photoURL } = auth.currentUser;
    addDoc(collection(db, "conversations", currentConversation.id, "messages"), {
      senderId: uid,
      timestamp: serverTimestamp(),
      recipientId: "123",
      text: message,
      // name: displayName,
      // avatar: photoURL,
    });
    setMessage("");
  };

  return (
    <MessageBarStyled>
      <div className="message-bar">
        <span className="emoji">
          <FontAwesomeIcon icon={faSmile} />
        </span>
        <input
          type="text"
          placeholder="Type a message..."
          onKeyDown={handleKeyDown}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
      </div>
      <div className="send-btn" onClick={handleSendMessage}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </div>
    </MessageBarStyled>
  );
};
