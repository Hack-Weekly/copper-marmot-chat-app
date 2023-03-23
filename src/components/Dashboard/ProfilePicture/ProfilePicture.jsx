import { ProfilePictureStyled } from "./ProfilePicture.styled";
import { auth } from "../../../firebase";

export const ProfilePicture = () => {
  const { photoURL } = auth.currentUser;

  return (
    <ProfilePictureStyled>
      <div className="img-ct">
        <img src={photoURL} alt="avatar" />
      </div>
      <span className="online-indicator"></span>
    </ProfilePictureStyled>
  );
};
