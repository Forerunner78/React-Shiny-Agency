import { useParams, Link } from 'react-router-dom'
import { PageTitle } from '../../utils/style/PageTitle'
import styled from 'styled-components'

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
`


function Survey() {
    const { questionNumber } = useParams()
    const currentNumber = parseInt(questionNumber)
    const previousNumber = currentNumber === 1 ? currentNumber : currentNumber - 1
    const nextNumber = currentNumber + 1

	return (
		<div>
			<PageTitle>Question {questionNumber}</PageTitle>

			<StyledNav>
				<Link to={"/survey/" + previousNumber}>Question précédente</Link>
				{currentNumber === 10 ? (
					<Link to={"/results"}>Résultats</Link>
				) : (
					<Link to={"/survey/" + nextNumber}>Question suivante</Link>
				)}
			</StyledNav>
		</div>
	);
}

export default Survey