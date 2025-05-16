import React, { useState, useEffect } from "react";
import FormatTime from "./FormatTimeDisplay";
const CountdownTimer = ({eventdeal}) => {
const isEventFuture = () => new Date(eventdeal).getTime() > new Date().getTime(); // rteurn true or false 
const calculateInitialTimeRemaining = () => {
    const eventTimeMs = new Date(eventdeal).getTime(); // in ms
    const nowMs = new Date().getTime(); // in ms
    const remaining = eventTimeMs - nowMs; // remain time t the evvent in ms 
    return remaining > 0 ? remaining : 0; 
  };
  const [countdownStarted, setCountdownStarted] = useState(isEventFuture);
  const [timeRemaining, setTimeRemaining] = useState(calculateInitialTimeRemaining);

  useEffect(() => {
    let intervalId = null;
    if (countdownStarted) {
      const eventTimeMs = new Date(eventdeal).getTime();

      if (eventTimeMs <= new Date().getTime()) {
        setTimeRemaining(0);
        setCountdownStarted(false); 
        return; 
      }

      const tick = () => {
        const nowMs = new Date().getTime();
        const remainingMs = eventTimeMs - nowMs;

        if (remainingMs <= 0) {
          setTimeRemaining(0);
          if (intervalId) clearInterval(intervalId);
          setCountdownStarted(false); 
        } else {
          setTimeRemaining(remainingMs);
        }
      };

      tick(); 
      intervalId = setInterval(tick, 1000);
    }

    
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [countdownStarted, eventdeal]); 



  return (
    <div className="flex ">
      
      {FormatTime(timeRemaining)}
      
    </div>
  );
};

export default CountdownTimer;