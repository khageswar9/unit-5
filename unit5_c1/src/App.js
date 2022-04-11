// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [scr , setScr] = useState({
    Score: 76,
    Wicket: 2,
    Ball: 50
   });


   
   function scoreHandler(str,value){
    if(scr.Score>100 || scr.Wicket>11){
      return
    }

    let m = {};
    m[str] = scr[str]+value

    let res = {
        ...scr,
        ...m
    }
    setScr(res);
}
var ow ="";
var wi = "";
if(scr.Score>100){
  ow = "Won"
}
if(scr.Wicket>=12){
  wi="ALL OUT"
}
  return (
    <div className="App">
      <h3>India:
          {ow}
      </h3>
      <div className="banner">
        <div>
          Score:{scr.Score}
          <h1 className="scoreCount">
            {
              scr.Score
            }
          </h1>
        </div>
        <div>
          Wicket:{scr.Wicket}
          <h1 className="wicketCount">
            {wi}
            {
              // show wicket here
              scr.Wicket
            }
          </h1>
        </div>

        <div>
          Over:{Math.floor(scr.Ball/6)+"."+(scr.Ball%6)}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              Math.floor(scr.Ball/6)+"."+(scr.Ball%6)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={()=>{scoreHandler("Score",+1)}}>Add 1</button>
        <button className="addScore4" onClick={()=>{scoreHandler("Score",+4)}}>Add 4</button>
        <button className="addScore6" onClick={()=>{scoreHandler("Score",+6)}}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>{scoreHandler("Wicket",+1)}}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>{scoreHandler("Ball",+1)}}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );


}

export default App;

