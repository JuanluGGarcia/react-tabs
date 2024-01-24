import { v4 } from "uuid";
import { StyledList, StyledTab, StyledTabsContainer } from "./styles";
import { useState } from "react";

// const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

// Con esto evitamos llamar en cada interacción a v4, sólo lo llamamos una vez
const tabs = [
    { id: v4(), tabName: 'Tab 1' },
    { id: v4(), tabName: 'Tab 2' },
    { id: v4(), tabName: 'Tab 3' }
    
];

const tabsInfo = ['Info 1', 'Info 2', 'Info 3'];



const Tabs = () => {
    
    const [tabActive, setTabActive] = useState(0);

    return (
        <>
            <StyledTabsContainer>
                <StyledList>
                    
                    {tabs.map((tab, index) => {

                        return (

                            // <StyledTab onClick={() => handleTab(setTabActive, index)} key={v4()}>
                            //     {tab}
                            // </StyledTab>

                            // Antes llamabamos a v4, para evitarlo lo ponemos así con el valor obtenido arriba
                            // Ponemos tab.tabName xq es el valor que hemos puesto en el map
                            <StyledTab onClick={() => 
                                handleTab(setTabActive, index)} 
                                key={tab.id}
                                // Comprobamos que la pestaña esté activa y pasamos este active al background de styles
                                $active = {index === tabActive}
                            >
                                {tab.tabName}
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