import { Outlet } from "react-router-dom";
import { StyledLink } from "../../utils/style/Atoms";
import styled from 'styled-components'
import logo from '../../assets/dark-logo.png'

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

`

export default function Layout() {
	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
				share across all the pages on your site, like navigation. */}
			<StyledNav>
				<div>
					<img src={logo} alt="Shiny logo" />
				</div>
				<div>
					<StyledLink to="/">Acceuil</StyledLink>
					<StyledLink to="/freelances">Profils</StyledLink>
					<StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
				</div>
			</StyledNav>

			{/* An <Outlet> renders whatever child route is currently active,
				so you can think about this <Outlet> as a placeholder for
				the child routes we defined above. */}
			<Outlet />
		</div>
	);
}