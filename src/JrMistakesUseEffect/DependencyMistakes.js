import React, { useEffect, useMemo, useState } from "react";

export default function DependencyMistakes() {
  const [name, setName] = useState("");
  const [state, setState] = useState({
    name: "",
    selected: false,
    age: 20,
    city: "",
  });

  // soln 1 useMemo hook, memoize what's in the state, only recompute when one of the dependencies has changed
  // wrap object in literal to avoid interpreted as a block statement such as in an arrow function
  // const blah = () => ({a: 1}), blah() => {a: 1}
  // function passed to useMemo runs during rendering, side effects belong in useEffect, not useMemo
  const user = useMemo(() => {
    console.log("inside memo");
    return {
      name: state.name,
      selected: state.selected,
    };
  }, [state.name, state.selected]);

  // strings, numbers, and booleans are primitive and comparison is straightfoward (value compare)
  // objects compares different points in memory, so comparing 2 objects with same properties will not equal (ref compare)
  // react doesn't compare the array [1] === [1], instead they compare every single element in array 1 === 1
  useEffect(() => {
    console.log("The state has changed, useEffect runs!");
  }, [user]);

  // soln 2, every single primative var in the object
  // useEffect(() => {
  //   console.log("The state has changed, useEffect runs!");
  // }, [state.name, state.selected]);

  const handleAdd = () => {
    setState((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setState((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {`{
			name:${state.name},
			selected:${state.selected.toString()}
		}`}
    </div>
  );
}
