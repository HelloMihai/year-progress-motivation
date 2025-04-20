// App.jsx
import React from "react";
import "./App.css";

const months = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const getMonthProgress = (monthIndex) => {
  const now = new Date();
  const currentMonth = now.getMonth();

  if (monthIndex < currentMonth) return 100;
  if (monthIndex > currentMonth) return 0;

  const totalDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const currentDay = now.getDate();
  return Math.floor((currentDay / totalDays) * 100);
};

export default function App() {
  const currentMonth = new Date().getMonth();

  return (
    <div className="app">
      <h1 className="title">2025</h1>
      <div className="months">
        {months.map((month, index) => {
          const progress = getMonthProgress(index);
          const isPast = index < currentMonth;
          const isCurrent = index === currentMonth;

          return (
            <div key={month} className="month-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    height: `${progress}%`,
                    backgroundColor: isPast || isCurrent ? "#f87171" : "#4ade80",
                    bottom: 0,
                  }}
                ></div>
                <div className="month-text">
                  {month.split("").map((letter, i) => (
                    <div key={i}>{letter}</div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="labels">
        <span>this is done</span>
        <span>this is up to YOU</span>
      </div>
    </div>
  );
}
