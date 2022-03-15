import { useState, useEffect } from "react";
const useEffectHook = () => {
  const [count, setCount] = useState(0);
//   !ComponentDidMount
  useEffect(() => {
    const timeOut = setTimeout(() => {
        console.log('Counter mounted');
      alert("data Fetched");
    }, 3000);
  }, []);
//   !ComponentDidupdate
useEffect(() => {
    console.log(`Count:${count}`);
},[count]);

useEffect(()=>{
    const intervelId = setInterval(()=> {
        console.log("interval");
    }, 1000)
    return() => {
        clearInterval(intervelId);
    }
}, [])

  return (
    <div>
      <h1>USE EFFECT</h1>
      <p>COUNT:{count}</p>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default useEffectHook;
