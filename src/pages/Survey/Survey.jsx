import { useParams, Link } from 'react-router-dom'
import { PageTitle } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context/ThemeProvider'
import { useTheme } from '../../utils/hooks/Hooks'
import { useContext } from 'react'
import { answersLinkedJob } from '../../models/results'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import surveyData from '../../models/survey'

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
    const previousNumber =
        currentNumber === 1 ? currentNumber : currentNumber - 1
    const nextNumber = currentNumber + 1
    const { saveAnswers, answers } = useContext(SurveyContext)

    const { theme } = useTheme()

    function saveReply(answer) {
        saveAnswers({ [answersLinkedJob[questionNumber]]: answer })
    }

    const handleClick = (answer) => {
        const yesButton = document.getElementById('button-yes')
        const noButton = document.getElementById('button-no')

        if (answer === 'yes') {
            console.log('yes')
            yesButton.classList.add('active')
            yesButton.style.borderColor = `${colors.primary}`
            noButton.classList.remove('active')
        } else if (answer === 'no') {
            console.log('yes')
            noButton.classList.add('active')
            noButton.style.borderColor = `${colors.primary}`
            yesButton.classList.remove('active')
        } else {
            yesButton.classList.remove('active')
            noButton.classList.remove('active')
        }
    }

    return (
        <SurveyContainer>
            <PageTitle theme={theme}>Question {questionNumber}</PageTitle>
            <QuestionContent theme={theme}>
                {surveyData && surveyData[questionNumber]}
            </QuestionContent>

            <ReplyWrapper>
                <ReplyBox
                    id="button-yes"
                    onClick={() => {
                        saveReply(true)
                        handleClick('yes')
                    }}
                    isSelected={answers[questionNumber] === true}
                    theme={theme}
                >
                    Oui
                </ReplyBox>
                <ReplyBox
                    id="button-no"
                    onClick={() => {
                        saveReply(false)
                        handleClick('no')
                    }}
                    isSelected={answers[questionNumber] === false}
                    theme={theme}
                >
                    Non
                </ReplyBox>
            </ReplyWrapper>

            <StyledNav theme={theme}>
                <Link to={`/survey/${previousNumber}`}>
                    Question précédente
                </Link>
                {currentNumber === 6 ? (
                    <Link to="/results">Résultats</Link>
                ) : (
                    <Link
                        to={`/survey/${nextNumber}`}
                        onClick={() => handleClick()}
                    >
                        Question suivante
                    </Link>
                )}
            </StyledNav>
        </SurveyContainer>
    )
}

export default Survey
