import "./App.css";
import Bcomponent from "./Context/Bcomponent";
import Ccomponent from "./Context/Ccomponent";
import Dcomponent from "./Context/Dcomponent";

function App() {
  return (
    <div className="App">
      <Ccomponent />
      <Bcomponent />
      <Dcomponent />
    </div>
  );
}

export default App;
