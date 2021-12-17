import React from "react";

export default function Keys(props) {
  let play = (i) => {
    var audio = new Audio("/audio/key-" + i + ".mp3");
    audio.play();
  };

  return (
    <a href="/#">
      <path className={props.path.class} d={props.path.path} onClick={() => play(props.index)} />
    </a>
  );
}
