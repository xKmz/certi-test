import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem;
`;

export const StarshipsTitle = styled.h1`
    color: ${props => props.theme['darkBlue']};
    margin-bottom: 3rem;
`;

export const StarshipsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    flex-wrap: wrap;
`;

export const StarshipsCard = styled.div`
    width: 300px;
    height: auto;
    background: ${props => props.theme['darkBlue']};
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0.5rem;
    padding: 1rem;

    p {
        text-align: center;
    }

    &:hover {
        background: ${props => props.theme['orange']};
    }
`;
