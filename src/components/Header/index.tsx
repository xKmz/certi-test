import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderContent, MenuItems } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h1>Star Wars catalog</h1>
                <MenuItems>
                    <NavLink to="/" title="Home">Home</NavLink>
                    <NavLink to="/starships" title="Starships">Starships</NavLink>
                    <NavLink to="/pilots" title="Pilots">Pilots</NavLink>
                </MenuItems>
            </HeaderContent>
        </HeaderContainer>
    )
}