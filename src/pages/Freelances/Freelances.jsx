import Card from '../../components/Card/Card'
import styled from 'styled-components'
import { PageTitle } from '../../utils/style/Atoms'
import { useTheme } from '../../utils/hooks/Hooks'
import freelancesData from '../../models/freelances'

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
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-weight: 300;
    text-align: center;
    padding-bottom: 30px;
`

export default function Freelances(props) {
    const { theme } = useTheme()
    const { jobneeded } = props
    console.log(jobneeded)

    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardsContainer>
                {freelancesData?.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.job}
                        picture={profile.picture}
                        title={profile.name}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}
