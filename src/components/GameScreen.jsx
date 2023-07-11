/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import "./GameScreen.css";
import { MdRestartAlt } from "react-icons/md";

const GameScreen = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  restart,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus();
  };
  return (
    <div className="container">
      <div className="box game_box">
        <MdRestartAlt
          title="Restart"
          onClick={restart}
          className="icon_restart"
        />
        <p className="points">
          Pontuação: <span>{score}</span>
        </p>
        <h1 className="title_game">
          Adivinhe a <span>Palavra:</span>
        </h1>
        <h3 className="tip">
          Tema: <span>{pickedCategory}</span>
        </h3>
        <p className="guesses">
          Você ainda tem <span>{guesses} Tentativa(s)</span>
        </p>
        <div className="word_container">
          {letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">
                {letter}
              </span>
            ) : (
              <span key={i} className="blank_square"></span>
            )
          )}
        </div>
        <div className="letter_container">
          <p>Tente advinhar uma letra da palavra</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="letter"
              maxLength="1"
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <button>Chutar</button>
          </form>
        </div>
        <div className="wrong_letters_container">
          <p>Letras erradas:</p>
          {wrongLetters.map((letter, i) => (
            <span key={i}>{letter}, </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;
