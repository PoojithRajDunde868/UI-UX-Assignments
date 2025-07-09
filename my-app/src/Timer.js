import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(sec => sec + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <p>Component open for: {seconds} seconds</p>;
}
