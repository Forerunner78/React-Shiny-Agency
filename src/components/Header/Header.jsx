import { Outlet } from "react-router-dom";
import { StyledLink } from "../../utils/style/Atoms";
import styled from 'styled-components'
import WhiteLogo from '../../assets/white-logo.svg'
import BlackLogo from '../../assets/black-logo.svg'
import { useTheme } from '../../utils/hooks/Hooks'

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;

`

export default function Layout() {
	const { theme } = useTheme()
	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
				share across all the pages on your site, like navigation. */}
			<StyledNav>
				<div>
					<img src={theme === 'light' ? BlackLogo : WhiteLogo} alt="Shiny logo" />
				</div>
				<div>
					<StyledLink $theme={theme} to="/">Acceuil</StyledLink>
					<StyledLink $theme={theme} to="/freelances">Profils</StyledLink>
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