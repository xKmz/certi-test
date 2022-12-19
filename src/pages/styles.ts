import styled from "styled-components";

export const HomeContainer = styled.main`
    height: 80vh;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.0rem;

`;

export const SelectPageButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme['darkBlue']};
    color: ${props => props.theme['white']};
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;
`;