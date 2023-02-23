import { useParams, Link } from 'react-router-dom'
import { PageTitle } from '../../utils/style/Atoms'
import { Loader } from '../../utils/style/Atoms'
import { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { SurveyContext } from '../../utils/context/ThemeProvider'

const SurveyContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

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
const ReplyBox = styled.button`
	border: none;
	height: 100px;
	width: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.backgroundLight};
	border-radius: 30px;
	cursor: pointer;
	box-shadow: ${(props) =>
		props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
	&:first-child {
		margin-right: 15px;
	}
	&:last-of-type {
		margin-left: 15px;
	}
`

const ReplyWrapper = styled.div`
	display: flex;
	flex-direction: row;
`

function Survey() {
    const { questionNumber } = useParams()
    const currentNumber = parseInt(questionNumber)
    const previousNumber = currentNumber === 1 ? currentNumber : currentNumber - 1
    const nextNumber = currentNumber + 1
	const [surveyData, setSurveyData] = useState({})
	const [isDataLoading, setDataLoading] = useState(false)
	const [error, setError] = useState(false)
	const { saveAnswers, answers } = useContext(SurveyContext)

	function saveReply(answer) {
		saveAnswers({ [questionNumber]: answer })
	}

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
		<SurveyContainer>
			<PageTitle>Question {questionNumber}</PageTitle>
			{isDataLoading ? (
				<Loader />
			) : (
				<QuestionContent>{surveyData[questionNumber]}</QuestionContent>
			)}

			<ReplyWrapper>
			<ReplyBox
				onClick={() => saveReply(true)}
				isSelected={answers[questionNumber] === true}
				>
					Oui
				</ReplyBox>
				<ReplyBox
				onClick={() => saveReply(false)}
				isSelected={answers[questionNumber] === false}
				>
					Non
				</ReplyBox>
			</ReplyWrapper>

			<StyledNav>
				<Link to={`/survey/${previousNumber}`}>Question précédente</Link>
				{currentNumber === 6 ? (
					<Link to="/results">Résultats</Link>
				) : (
					<Link to={`/survey/${nextNumber}`}>Question suivante</Link>
				)}
			</StyledNav>
		</SurveyContainer>
	);
}

export default Survey