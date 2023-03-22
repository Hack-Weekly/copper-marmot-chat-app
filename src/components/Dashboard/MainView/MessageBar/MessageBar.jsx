import { MessageBarStyled } from "./MessageBar.styled"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane, faSmile} from '@fortawesome/free-regular-svg-icons';
import {useState} from 'react';

export const MessageBar = () => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    }

    const handleSendMessage = () => {
        setMessage('');
    }

    return (
        <MessageBarStyled>
            <div className="message-bar">
                <span className="emoji">
                    <FontAwesomeIcon icon={faSmile} />
                </span>
                <input type="text" placeholder="Type a message..." onKeyDown={handleKeyDown} onChange={handleChange} value={message} />
            </div>
            <div className="send-btn" onClick={handleSendMessage}>
                <FontAwesomeIcon icon={faPaperPlane} />
            </div>
        </MessageBarStyled>
    )
}