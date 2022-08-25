import React from "react";
import "./App.css";

const App = () => {
  return (
    <section className="timer-container">
      <div className="timer">
        <span className="mdi mdi-calendar-clock timer-icon"></span>
        <h2>CountDown Timer</h2>
        <p>
          Countdown to a really special date. One you could or would ever
          imagine!
        </p>
      </div>
    </section>
  );
};

export default App;
