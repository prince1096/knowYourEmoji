import { useState } from "react";
import "./styles.css";

// var userName = "Prince Raj";

// var userName = prompt("Give me your Name");
// var likeCounter = 0;

const emojiDictionary = {
  "☺": "Smiling",
  "😲": "disbelief",
  "😥": "sad",
  "🥡": "takeout box",
  "❤": "love",
  "😑": "annoyance",
  "🥱": "yawning"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  // const [likeCounter, setLikeCounter] = useState(0);

  // function likeCLickHandler() {
  //   // console.log("Clicked");
  //   var newLikeCounter = likeCounter + 1;
  //   setLikeCounter(newLikeCounter);
  //   // likeCounter++;
  // }

  // const [userInput, setUserInput] = useState("");
  // function inputChangehandler(event) {
  // console.log(event.target.value);
  // setUserInput(event.target.value);
  // }

  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    // console.log(event.target.value);

    const emoji = event.target.value;

    let meaning = emojiDictionary[emoji];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this emoji in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      {/* <h1 style={{ backgroundColor: "blue" }}> Welcome {userName} </h1> */}

      <h1> Inside outtt </h1>

      {/* <input type="text" onChange={inputChangehandler} /> */}

      {/* <div> Welcome  {userInput} </div> */}

      {/* <button onClick={likeCLickHandler}> Like Me! </button> */}
      {/* <p> {likeCounter} 💖 </p> */}

      <input onChange={emojiInputHandler} />

      <div> {meaning} </div>

      <h3> emojis we Know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "30px", padding: "0 0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
