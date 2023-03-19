import { RecentChatItemStyled } from "./RecentChatItem.styled";
import pfpPic from '../../../../img/pfp_joel.png';

const RecentChatItem = ({ chat, onClick }) => {
    return (
        <RecentChatItemStyled>
            <div className="container">
                <div className="avatar">
                    <div className="img-ct">
                        <img src={pfpPic} alt="avatar" />
                    </div>
                    <span className="online-indicator"></span>
                </div>
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