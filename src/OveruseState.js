import React, { useState, useEffect } from "react";
import { fetchData } from "./api";
import { stringify } from "./utils";

export default function OveruseState() {
  const [data, setData] = useState(null);

  // Whenever a state setter function is only used synchronously in an effect, get rid of the state!
  // useEffect should be used to sync your state with something outside of React, utilizing useEffect to sync two react states is rarely right

  const outputString = data ? stringify(data) : "";
  // const [outputString, setOutputString] = useState();
  // useEffect(() => {
  //   if (data) {
  //     setOutputString(stringify(data));
  //   }
  // });

  // bad pattern
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
