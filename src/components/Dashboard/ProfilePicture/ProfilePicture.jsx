import { ProfilePictureStyled } from "./ProfilePicture.styled"
import pfpPic from '../../../img/pfp_joel.png';

export const ProfilePicture = () => {
    return (
        <ProfilePictureStyled>
            <div className="img-ct">
                <img src={pfpPic} alt="avatar" />
            </div>
            <span className="online-indicator"></span>
        </ProfilePictureStyled>
    )
}