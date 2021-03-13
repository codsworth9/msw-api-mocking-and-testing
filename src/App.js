import "./App.css";
import Fetch from "./Fetch";

function App() {
  return (
    <div className="App">
      <Fetch url="/greeting" />
    </div>
  );
}

export default App;
