import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Header from '../../components/Header/Header'
import Error from '../../components/Error/Error'
import Survey from '../Survey/Survey'
import Results from '../Results/Results'
import Freelances from '../Freelances/Freelances'
import Presentation from '../../assets/home-illustration.svg'
import colors from "../../utils/style/colors";
import styled from "styled-components";
import { StyledLink } from "../../utils/style/Atoms";
import { useTheme } from '../../utils/hooks/Hooks'


const HomeWrapper = styled.div`
	display: flex;
	justify-content: center;
	background-color: grey;
`

const HomerContainer = styled.div`
	margin: 30px;
	background-color: ${({ theme }) =>
    	theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
	padding: 60px 90px;
	display: flex;
	flex-direction: row;
	max-width: 1200px;
`

const LeftCol = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
	padding-right: 60px;
	${StyledLink} {
		max-width: 250px;
	}
`

const StyledTitle = styled.h2`
	padding-bottom: 30px;
	max-width: 280px;
	line-height: 50px;
	color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
	flex: 1;
	padding-left: 60px
`

export default function Homepage() {
	return (
		<div>

		{/* Routes nest inside one another. Nested route paths build upon
				parent route paths, and nested route elements render inside
				parent route elements. See the note about <Outlet> below. */}
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Home />} />
				<Route path="survey/:questionNumber" element={<Survey />} />
				<Route path="results" element={<Results />} />
				<Route path="freelances" element={<Freelances />} />

				{/* Using path="*"" means "match anything", so this route
						acts like a catch-all for URLs that we don't have explicit
						routes for. */}
				<Route path="*" element={<Error />} />
			</Route>
		</Routes>
		</div>
	);
}

function Home() {
	const { theme } = useTheme()
	return (
		<HomeWrapper>
			<HomerContainer theme={theme}>
				<LeftCol>
					<StyledTitle theme={theme}>
						Repérez vos besoins, on s’occupe du reste, avec les meilleurs
						talents
					</StyledTitle>
					<StyledLink to="/survey/1" $isFullLink>
						Faire le test
					</StyledLink>
				</LeftCol>
				<Illustration src={Presentation} />
			</HomerContainer>
		</HomeWrapper>
	);
}
