import { RecentChatItemStyled } from "./RecentChatItem.styled";
import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";
import moment from "moment";
import { TIME_FORMAT } from "../../../../consts";

const RecentChatItem = (props) => {
    const data = props.recentChat;

    return (
        <RecentChatItemStyled>
            <div className="container">
                <ProfilePicture />
                <div className="info">
                    <div className="name">{data.name}</div>
                    <div className="message">{data.lastMessage}</div>
                </div>
                <div className="time">{moment.unix(data.lastMsgTimestamp).format(TIME_FORMAT)}</div>
            </div>
            <span className="seperator"></span>
        </RecentChatItemStyled>
    );
};

export default RecentChatItem;