import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import logo from "../../img/copper_dashboard_logo.png";
import BasicButton from "../BasicButton/BasicButton";
import { DashboardStyled, LeftDashboardStyled, LogoStyled, RightDashboardHeaderStyled, RightDashboardStyled } from "./Dashboard.styled";
import MainView from "./MainView/MainView";
import RecentChats from "./RecentChats/RecentChats";

export const ConversationContext = createContext(null);

const Dashboard = () => {
    const [currentConversation, setCurrentConversation] = useState(); // TODO: change to actual current conv

    // useEffect(() => {
    //     getDoc(doc(db, "conversations", "szbx3viXZ7TnLc0gZlWT"))
    //         .then((doc) => {
    //             if (doc.exists()) {
    //                 console.log("Current Conversation:", doc.id, doc.data());
    //                 setCurrentConversation(doc);
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Error getting document:", error);
    //         });

    //     getDocs(collection(db, "conversations", "szbx3viXZ7TnLc0gZlWT", "messages"))
    //         .then((messages) => {
    //             messages.forEach((message) => {
    //                 console.log(message.data());
    //             });
    //         });
    // }, []);

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