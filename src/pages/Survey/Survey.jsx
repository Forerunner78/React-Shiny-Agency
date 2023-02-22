import { useParams, Link } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()
    const currentNumber = parseInt(questionNumber)
    const previousNumber = currentNumber === 1 ? currentNumber : currentNumber - 1
    const nextNumber = currentNumber + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>

      <nav>
        <ul>
          <li>
            <Link to={"/survey/" + previousNumber}>Question précédente</Link>
          </li>
          <li>
            {currentNumber === 10 ? (
              <Link to={"/results"}>Résultats</Link>
            ) : (
            <Link to={"/survey/" + nextNumber}>Question suivante</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Survey