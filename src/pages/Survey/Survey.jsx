import { useParams, Link } from 'react-router-dom'
import { PageTitle } from '../../utils/style/Atoms'
import { Loader } from '../../utils/style/Atoms'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-around;
	padding-top: 30px;
	& a {
		color: black;
	}
	& a:first-of-type {
		margin-right: 20px;
	}
`

const QuestionContent = styled.span`
	display: block;
	text-align: center;
	margin: 30px;
`


function Survey() {
    const { questionNumber } = useParams()
    const currentNumber = parseInt(questionNumber)
    const previousNumber = currentNumber === 1 ? currentNumber : currentNumber - 1
    const nextNumber = currentNumber + 1
	const [surveyData, setSurveyData] = useState({})
	const [isDataLoading, setDataLoading] = useState(false)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function fetchSurvey() {
			setDataLoading(true)
			try {
				const response = await fetch(`http://localhost:8000/survey`)
				const { surveyData } = await response.json()
				setSurveyData(surveyData)
			} catch (err) {
				console.log('===== error =====', err)
				setError(true)
			} finally {
				setDataLoading(false)
		}
	}
		fetchSurvey()
	}, [])

if (error) {
return <span>Oups il y a eu un problème</span>
}

	return (
		<div>
			<PageTitle>Question {questionNumber}</PageTitle>
			{isDataLoading ? (
				<Loader />
			) : (
				<QuestionContent>{surveyData[questionNumber]}</QuestionContent>
			)}

			<StyledNav>
				<Link to={`/survey/${previousNumber}`}>Question précédente</Link>
				{currentNumber === 6 ? (
					<Link to="/results">Résultats</Link>
				) : (
					<Link to={`/survey/${nextNumber}`}>Question suivante</Link>
				)}
			</StyledNav>
		</div>
	);
}

export default Survey