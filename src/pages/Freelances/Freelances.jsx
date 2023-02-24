import Card from '../../components/Card/Card'
import styled from 'styled-components'
import { Loader, PageTitle } from '../../utils/style/Atoms'
import { useFetch, useTheme } from '../../utils/hooks/Hooks'

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
const LoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export default function Freelances() {
    const { theme } = useTheme()
    const { data, isLoading, error } = useFetch(
		`http://localhost:8000/freelances`
	)

    // Ici le "?" permet de s'assurer que data existe bien.
    // Vous pouvez en apprendre davantage sur cette notation ici :
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    const freelancesList = data?.freelancersList;

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isLoading ? (
				<LoaderWrapper>
                    <Loader theme={theme}/>
                </LoaderWrapper>
			) : (
				<CardsContainer>
                    {freelancesList?.map((profile, index) => (
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