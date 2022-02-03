import React from 'react';
import audio from "../../assets/audio/theme.mp3"
import "./index.css"

export default function Header() {
  return <div>
    <section id="title">
          <h1>84452韭菜杯8强抽签仪式</h1>
          <h2>84452 LEEK CUP QUATER-FINALS</h2>
          <div>
            <audio id="audio" src={audio} autoplay="autoplay" loop="loop" controls="controls" />
          </div>
          <h4>点击播放注入灵魂</h4>
        </section>

  </div>;
}
