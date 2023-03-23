import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useState } from "react";
import logo from "../../img/copper_dashboard_logo.png";
import BasicButton from "../BasicButton/BasicButton";
import { DashboardStyled, LeftDashboardStyled, LogoStyled, RightDashboardHeaderStyled, RightDashboardStyled } from "./Dashboard.styled";
import MainView from "./MainView/MainView";
import RecentChats from "./RecentChats/RecentChats";

export const ConversationContext = createContext(null);

const Dashboard = () => {
    const [currentConversation, setCurrentConversation] = useState();

    return (
        <ConversationContext.Provider value={currentConversation}>
            <DashboardStyled>
                <LeftDashboardStyled>
                    <LogoStyled>
                        <img src={logo} alt="Logo" />
                    </LogoStyled>
                    <RecentChats setCurrentConversation={setCurrentConversation} />
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

                    <MainView />
                </RightDashboardStyled>
            </DashboardStyled>
        </ConversationContext.Provider>
    );
};

export default Dashboard;