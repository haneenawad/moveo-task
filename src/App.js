import "./App.css";
import React, { useState } from "react";
import audio1File from "./allAudios/audio1.mp3";
import audio2File from "./allAudios/audio2.mp3";
import audio3File from "./allAudios/audio3.mp3";
import audio4File from "./allAudios/audio4.mp3";
import audio5File from "./allAudios/audio5.mp3";
import audio6File from "./allAudios/audio6.mp3";
import audio7File from "./allAudios/audio7.mp3";
import audio8File from "./allAudios/audio8.mp3";
import audio9File from "./allAudios/audio9.mp3";

import iconBtn from "./iconButton.png";
import iconPlay from "./iconPlay.png";
import iconStop from "./iconStop.png";

let audio1 = new Audio(audio1File);
let audio2 = new Audio(audio2File);
let audio3 = new Audio(audio3File);
let audio4 = new Audio(audio4File);
let audio5 = new Audio(audio5File);
let audio6 = new Audio(audio6File);
let audio7 = new Audio(audio7File);
let audio8 = new Audio(audio8File);
let audio9 = new Audio(audio9File);

function App() {
  const [audio1State, setAudio1State] = useState("off");
  const [audio2State, setAudio2State] = useState("off");
  const [audio3State, setAudio3State] = useState("off");
  const [audio4State, setAudio4State] = useState("off");
  const [audio5State, setAudio5State] = useState("off");
  const [audio6State, setAudio6State] = useState("off");
  const [audio7State, setAudio7State] = useState("off");
  const [audio8State, setAudio8State] = useState("off");
  const [audio9State, setAudio9State] = useState("off");

  const allAudios = [
    [audio1State, setAudio1State, audio1, "Audio 1"],
    [audio2State, setAudio2State, audio2, "Audio 2"],
    [audio3State, setAudio3State, audio3, "Audio 3"],
    [audio4State, setAudio4State, audio4, "Audio 4"],
    [audio5State, setAudio5State, audio5, "Audio 5"],
    [audio6State, setAudio6State, audio6, "Audio 6"],
    [audio7State, setAudio7State, audio7, "Audio 7"],
    [audio8State, setAudio8State, audio8, "Audio 8"],
    [audio9State, setAudio9State, audio9, "Audio 9"],
  ];

  const arrayOfAudios = [
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
    audio6,
    audio7,
    audio8,
    audio9,
  ];

  let flag = "play";

  {
    /* --------------------------Functions-------------------------------------- */
  }

  function getAudio(audioState, updateState, audio) {
    if (audioState === "off") {
      updateState("on");
      return audio.play();
    }
    updateState("off");
    return audio.pause();
  }

  // sleep time expects milliseconds
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function playAudios() {
    if (flag !== "stopped") {
      arrayOfAudios.map((audio) => audio.play());

      sleep(0).then(() => {
        playAudios();
      });
    } else {
      flag = "play";
    }
  }

  function stopAudios() {
    arrayOfAudios.map((audio) => audio.pause());
    flag = "stopped";
  }

  {
    /* ------------------------------------------------------------------- */
  }

  return (
    <div className="App">
      <header className="App-header">
        <p id="title">Let's Listen to the AMAZING MUSIC !</p>
        <div id="playStop">
          {/* --------------------------PLAY-------------------------------------- */}
          <div id="play">
            <img id="icon" src={iconPlay} onClick={() => playAudios()} />
          </div>
          {/* -------------------------------STOP-------------------------------------- */}
          <div id="stop">
            <img id="icon" src={iconStop} onClick={() => stopAudios()} />
          </div>
        </div>
        {/* ---------------------------All Audios------------------------------------- */}

        {allAudios.map((sound) => (
          <div id="allButtons">
            <button
              id="audio-button"
              onClick={() => getAudio(sound[0], sound[1], sound[2])}
            >
              <img id="icon" src={iconBtn} />
              {sound[3]}
            </button>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
