import { v4 } from "uuid";
import { StyledList, StyledTab, StyledTabsContainer } from "./styles";
import { useState } from "react";

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabsInfo = ['Info 1', 'Info 2', 'Info 3'];



const Tabs = () => {
    
    const [tabActive, setTabActive] = useState(0);

    return (
        <>
            <StyledTabsContainer>
                <StyledList>
                    
                    {tabs.map((tab, index) => {

                        return (

                            <StyledTab onClick={() => handleTab(setTabActive, index)} key={v4()}>
                                {tab}
                            </StyledTab>
                        );
                        
                    })}

                </StyledList>
            </StyledTabsContainer>
            <p>{tabsInfo[tabActive]}</p>
        </>
        
    );
};

const handleTab = (setTabActive, index) => {
    setTabActive(index);
};

export default Tabs;