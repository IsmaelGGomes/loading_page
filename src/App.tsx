import Navbar from "@/scenes/navbar/";
import { useState } from "react";

function App() {
  const [selectPage,setSelectPage]= useState<string>("home");

  return (
    <div className="app bg-gray-20">
      <Navbar selectPage={selectPage} setSelectPage={setSelectPage}/>
    </div>
  );
}

export default App
