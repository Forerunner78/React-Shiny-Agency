import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h2>Oups 🙈 Cette page n'existe pas</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default Error