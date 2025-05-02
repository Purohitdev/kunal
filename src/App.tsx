


import  { useState, useEffect } from "react";
import Home from "./Home/Home";
import Loader from "./Loader"; // ✅ Adjust path if needed

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#FFEDE1]">
      {loading ? <Loader /> : <Home />}
    </div>
  );
}

export default App;
