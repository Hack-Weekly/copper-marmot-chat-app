import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../img/copper_login_logo.png";
import BasicButton from "../BasicButton/BasicButton";
import { DashboardStyled, LeftDashboardStyled, LogoStyled, RightDashboardHeaderStyled, RightDashboardStyled } from "./Dashboard.styled";
import MainView from "./MainView/MainView";
import RecentChats from "./RecentChats/RecentChats";

const Dashboard = () => {
    return (
        <DashboardStyled>
            <LeftDashboardStyled>
                <LogoStyled>
                    <img src={logo} alt="Logo" />
                </LogoStyled>
                <RecentChats />
            </LeftDashboardStyled>
            <RightDashboardStyled>
                <RightDashboardHeaderStyled>
                    <BasicButton>
                        <FontAwesomeIcon icon={faComment} /> Chat
                    </BasicButton>
                    <BasicButton>
                        <FontAwesomeIcon icon={faGlobeAmericas} /> Explore
                    </BasicButton>
                </RightDashboardHeaderStyled>

                <MainView>

                </MainView>
            </RightDashboardStyled>
        </DashboardStyled>
    );
};

export default Dashboard;