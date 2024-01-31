import styled from "styled-components";

const StyledButton = styled.button`
    width: 100px;
    padding-inline: 1rem, 2rem;

    background-color: ${({$active}) => ($active ? 'lightcoral' : 'gray')};
    color: ${({$active}) => ($active ? '#FFF' : 'darkgray')};
    cursor: pointer;
`;

export { StyledButton };