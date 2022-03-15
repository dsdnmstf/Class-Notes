import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Timer from "./components/Timer";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="container text-center mt-4">
        <button className="btn btn-danger" onClick={() => setShow(!show)}>
          SHOW
        </button>
        {show && <LifeCycleMethods />}
      </div>

      <div className="container text-center mt-4">
        <Timer time={20} />
      </div>
    </>
  );
}

export default App;
