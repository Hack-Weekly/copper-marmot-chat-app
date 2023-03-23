import { ProfilePictureStyled } from "./ProfilePicture.styled";
import placeHolderPic from "../../../img/pfp_joel.png";

export const ProfilePicture = (props) => {
  const picture = props.picture;

  return (
    <ProfilePictureStyled>
      <div className="img-ct">
        <img src={picture ?? placeHolderPic} alt="avatar" />
      </div>
      <span className="online-indicator"></span>
    </ProfilePictureStyled>
  );
};
