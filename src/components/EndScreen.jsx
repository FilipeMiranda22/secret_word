/* eslint-disable react/prop-types */
import defeated from "../assets/lose.svg";
import winner from "../assets/winner.svg";
import "./EndScreen.css";

const EndScreen = ({ retry, points }) => {
  return (
    <div className="container">
      <div className="box end_box">
        <h1>
          Fim de <span>Jogo!</span>
        </h1>
        <h3>
          A sua pontuação foi de: <span>{points}</span>
        </h3>
        {points === 0 ? (
          <img
            src={defeated}
            alt="animation lose"
            style={{ width: "300px", margin: "auto" }}
          />
        ) : (
          <img
            src={winner}
            alt="animation winner"
            style={{ width: "400px", margin: "auto" }}
          />
        )}

        <button onClick={retry}>Tentar novamente</button>
      </div>
    </div>
  );
};

export default EndScreen;
