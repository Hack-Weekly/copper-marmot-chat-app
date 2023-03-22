import { MessageStyled } from "./Message.styled"

export const Message = (props) => {
    const message = props.message;

    return (
        <MessageStyled className={`${message.isMine ? 'sent-msg' : 'received-msg'}`}>
            <div className="content">
                {message.content}
            </div>
            <div className="timestamp">
                {message.timestamp}
            </div>
        </MessageStyled>
    )
}