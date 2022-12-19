import { useNavigate } from "react-router-dom";

import { HomeContainer, SelectPageButton } from './styles';

export function Home() {
    const navigate = useNavigate();

    return (
        <HomeContainer>
            <SelectPageButton onClick={() => navigate('/starships')}>
                Starships
            </SelectPageButton>
            <SelectPageButton onClick={() => navigate('/pilots')}>
                Pilots
            </SelectPageButton>
        </HomeContainer>
    )
}