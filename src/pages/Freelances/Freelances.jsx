import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { PageTitle } from '../../utils/style/Atoms'
import { useState, useEffect } from 'react'

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
`

const PageSubtitle = styled.h2`
    font-size: 20px;
    color: ${colors.secondary};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default function Freelances() {
    const [freelancersList, setFreelancesList] = useState([])
    const [isDataLoading, setDataLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
    async function fetchFreelancesList() {
        setDataLoading(true)
        try {
            const response = await fetch(`http://localhost:8000/freelances`)
            const { freelancersList } = await response.json()
            setFreelancesList(freelancersList)
        } catch (err) {
            console.log('===== error =====', err)
            setError(true)
        } finally {
            setDataLoading(false)
        }
    }
        fetchFreelancesList()
    }, [])

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isDataLoading ? (
				<LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
			) : (
				<CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.jobTitle}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>
			)}
        </div>
    )
}