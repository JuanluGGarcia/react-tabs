import { useState } from "react";
import { BUTTONS } from "../../constants/buttons";
import { StyledButton } from "./style";
import { BUTTONSINFO } from "../../constants/buttonsInfo";

const Buttons = () => {
    const [buttonActive, setButtonActive] = useState(0);

    return (
        <>
            {BUTTONS.map((button, index) => {

                return (

                    <StyledButton onClick={() => 
                        handleButton(setButtonActive, index)}
                        key={button.id}

                        $active={index === buttonActive}
                    >
                        {button.name}
                    </StyledButton>
                );
            })}
            <p>{BUTTONSINFO[buttonActive]}</p>
        </>
    );
};

const handleButton = (setButtonActive, index) => {
    setButtonActive(index);
};

export default Buttons;