/* eslint-disable react/prop-types */
import "./StartScreen.css";
import start_img from "../assets/start.svg";

const StartScreen = ({ start }) => {
  return (
    <div className="container">
      <div className="box start_box">
        <h1>
          Secret <span>Word</span>
        </h1>
        <img
          src={start_img}
          alt="start_img"
          style={{ width: "350px", margin: "auto" }}
        />
        <button onClick={start}>Jogar</button>
      </div>
    </div>
  );
};

export default StartScreen;
