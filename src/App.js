import "./App.css";
import DependencyMistakes from "./JrMistakesUseEffect/DependencyMistakes";
import UnderstandingUseEffect from "./JrMistakesUseEffect/UnderstandingUseEffect";
import UpdatingState from "./JrMistakesUseEffect/UpdatingState";
import OveruseState from "./OveruseState";

function App() {
  return (
    <div className="App">
      <UpdatingState />
      {/* <DependencyMistakes /> */}
      {/* <UnderstandingUseEffect /> */}
      {/* <OveruseState /> */}
    </div>
  );
}

export default App;
