import styled from "styled-components";

const StyledTabsContainer = styled.div`
    width: 300px;
`;

const StyledList = styled.ul`
    display: flex;
    /* Reseteamos la lista */
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
`;

const StyledTab = styled.li`
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    /* Si $active es true le ponemos el color lightcoral a la pestaña si no le ponemos gray */
    background-color: ${({$active}) => ($active ? 'lightcoral' : 'gray')};
    color: ${({$active}) => ($active ? '#FFF' : 'darkgray')};
    cursor: pointer;
`;

export { StyledTabsContainer, StyledList, StyledTab };