import { MessageBarStyled } from "./MessageBar.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";
import { auth, db } from "../../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const MessageBar = () => {
  const [message, setMessage] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
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
