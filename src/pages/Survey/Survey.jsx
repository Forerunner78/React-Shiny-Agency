import { useParams, Link } from 'react-router-dom'
import { PageTitle } from '../../utils/style/Atoms'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context/ThemeProvider'
import { useFetch, useTheme } from '../../utils/hooks/Hooks'
import { useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

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
	background-color: ${({ theme }) =>
		theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
		color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
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
	const { saveAnswers, answers } = useContext(SurveyContext)
	const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
	const surveyData = data?.surveyData
	const { theme } = useTheme()

	function saveReply(answer) {
		saveAnswers({ [questionNumber]: answer })
	}

	if (error) {
	return <span>Oups il y a eu un problème</span>
	}

	return (
		<SurveyContainer>
			<PageTitle theme={theme}>Question {questionNumber}</PageTitle>
			{isLoading ? (
				<Loader />
			) : (
				<QuestionContent theme={theme}>{surveyData && surveyData[questionNumber]}</QuestionContent>
			)}

			<ReplyWrapper>
			<ReplyBox
				onClick={() => saveReply(true)}
				isSelected={answers[questionNumber] === true}
				theme={theme}
				>
					Oui
				</ReplyBox>
				<ReplyBox
				onClick={() => saveReply(false)}
				isSelected={answers[questionNumber] === false}
				theme={theme}
				>
					Non
				</ReplyBox>
			</ReplyWrapper>

			<StyledNav theme={theme}>
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