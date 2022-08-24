import React, { useEffect, useState } from "react";

export default function UpdatingState() {
  const [number, setNumber] = useState(0);

  // infinite loop, every second the number is changing it runs the function again and again
  // caused by updating state using the state variable itself
  // useEffect(() => {
  //   console.log("effect");
  //   setInterval(() => {
  //     setNumber(number + 1);
  //   }, 1000);
  // }, [number]);

  // use updating function, instead of state
  useEffect(() => {
    console.log("effect");
    setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
  }, []);

  console.log("render");

  return <div>{number}</div>;
}
