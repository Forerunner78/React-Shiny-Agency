import { useContext } from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks/Hooks'
import { StyledLink } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context/ThemeProvider'
import { jobAnswersData, jobsDefinitionData } from '../../models/results'

const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 60px 90px;
    padding: 30px;
    background-color: ${({ theme }) =>
        theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;
    & > span {
        padding-left: 10px;
    }
`

const DescriptionWrapper = styled.div`
    padding: 60px;
`

const JobTitle = styled.span`
    color: ${({ theme }) =>
        theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
`

const JobDescription = styled.div`
    font-size: 18px;
    & > p {
        color: ${({ theme }) =>
            theme === 'light' ? colors.secondary : '#ffffff'};
        margin-block-start: 5px;
    }
    & > span {
        font-size: 20px;
    }
`

export function formatQueryParams(answers) {
    const answerNumbers = Object.keys(answers)

    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}

function Results() {
    const { theme } = useTheme()
    const { answers } = useContext(SurveyContext)

    const requiredJobsList = Object.keys(answers).reduce((acc, key) => {
        if (answers[key] !== false) {
            acc[key] = answers[key]
        }
        return acc
    }, {})
    console.log(requiredJobsList)
    const keysToKeep = Object.keys(requiredJobsList)

    const jobNeeded = Object.keys(jobAnswersData).reduce((acc, key) => {
        if (
            jobAnswersData[key].some((value) => keysToKeep.includes(value)) &&
            !acc.includes(key)
        ) {
            acc.push(key)
        }
        return acc
    }, [])

    return (
        <ResultsContainer theme={theme}>
            <ResultsTitle theme={theme}>
                Les compétences dont vous avez besoin :
                {jobNeeded &&
                    jobNeeded.map((job, index) => (
                        <JobTitle
                            key={`result-title-${index}-${job}`}
                            theme={theme}
                        >
                            {formatJobList(job, jobNeeded.length, index)}
                        </JobTitle>
                    ))}
            </ResultsTitle>
            <StyledLink $isFullLink to="/freelances">
                Découvrez nos profils
            </StyledLink>
            <DescriptionWrapper>
                {jobNeeded &&
                    jobNeeded.map((job, index) => (
                        <JobDescription
                            theme={theme}
                            key={`result-detail-${index}-${job}`}
                        >
                            <JobTitle theme={theme}>{job}</JobTitle>
                            <p>{jobsDefinitionData[job]}</p>
                            <br />
                        </JobDescription>
                    ))}
            </DescriptionWrapper>
        </ResultsContainer>
    )
}

export default Results
