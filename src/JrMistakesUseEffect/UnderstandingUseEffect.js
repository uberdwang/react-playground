// lama dev: All useEffect Mistakes Every Junior React Developer Makes
// https://youtu.be/QQYeipc_cik
import React, { useEffect, useState } from "react";

// component -> react -> browser
/*
 * first render (number=0)
 * component: hey react, you should render this <span>You clicked 0 times</span>
 * component: after rendering, you should run this effect ()=>{document.title=`You clicke 0 times`;}
 * react: hey browser, there are new dom changes <span>You clicked 0 times</span>
 * browser: done, <span> is on the screen
 * react: hey browser, i'm now calling the effect
 * browser: dont, document.title is on the screen
 */
// first render (numer=0)
export default function UnderstandingUseEffect() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  // there's delay title updates after when dom updates # of clicks, that's because useEffect runs after rendering the component
  // if there's no dependency array, useEffect runs on every render, like when typing in the <input>
  // if there's an empty array, useEffect runs once
  useEffect(() => {
    console.count("useEffect runs!");
    document.title = `You clicked ${number} times`;
  }, [number]); // run this useEffect @ beginning, and run it only when it changes

  console.count("component rendered!");

  return (
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
