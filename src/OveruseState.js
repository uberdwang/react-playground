import React, { useState, useEffect } from "react";
import { fetchData } from "./api";
import { stringify } from "./utils";

// https://tkdodo.eu/blog/dont-over-use-state
export default function OveruseState() {
  const [data, setData] = useState(null);

  // Whenever a state setter function is only used synchronously in an effect, get rid of the state!
  // useEffect should be used to sync your state with something outside of React, utilizing useEffect to sync two react states is rarely right
  // what if there are two setOutputString deriving different values, need a single source of truth: setOutputString(stringify(data)), setOutputString(compute(data))

  const outputString = data ? stringify(data) : "";
  // bad pattern examples:
  // const [outputString, setOutputString] = useState();
  // useEffect(() => {
  //   if (data) {
  //     setOutputString(stringify(data));
  //   }
  // }, [data]);

  // const [processedData, setProcessedData] = useState();
  // useEffect(() => {
  // 	let processed = /* do something with data */;
  // 	setProcessedData(processed)
  // }, [data]);

  useEffect(() => {
    async function fetch() {
      const response = await fetchData();
      setData(response);
    }

    fetch();
  }, []);

  return <div>{outputString}</div>;
}
