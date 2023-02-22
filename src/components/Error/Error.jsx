import { Link } from "react-router-dom";
import Picture from '../../assets/404.svg';
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups ...</ErrorTitle>
      <Illustration src={Picture} alt="erreur 404" />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
      <p>
        <Link to="/">Retour à l'acceuil</Link>
      </p>
    </ErrorWrapper>
  );
}

export default Error