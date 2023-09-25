import { useEffect } from "react";
import AnimatedRoutes from "./Routes/AnimatedRoutes";

import "./index.css";

import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2200 });
  }, []);
  return (
    <div className="App">
      <AnimatedRoutes />
    </div>
  );
}

export default App;
