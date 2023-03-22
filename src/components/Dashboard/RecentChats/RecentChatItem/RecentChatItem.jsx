import { RecentChatItemStyled } from "./RecentChatItem.styled";
import { ProfilePicture } from "../../ProfilePicture/ProfilePicture";

const RecentChatItem = ({ chat, onClick }) => {
    return (
        <RecentChatItemStyled>
            <div className="container">
                <ProfilePicture />
                <div className="info">
                    <div className="name">Joel Miller</div>
                    <div className="message">You coming over tonight?</div>
                </div>
                <div className="time">19:32</div>
            </div>
            <span className="seperator"></span>
        </RecentChatItemStyled>
    );
};

export default RecentChatItem;