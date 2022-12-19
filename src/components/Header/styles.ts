import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme['darkBlue']};
    padding: 2.5rem 0 2.5rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
`;

export const MenuItems = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    gap: 1.5rem;

    a {
        text-decoration: none;
        color: ${props => props.theme['white']};

        &:hover {
            color: ${props => props.theme['orange']}
        }

        &.active {
            color: ${props => props.theme['orange']}
        }
    }


`;
