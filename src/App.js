import AnimatedRoutes from "./Routes/AnimatedRoutes";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
