import Navbar from "@/scenes/navbar/";
import { useEffect, useState } from "react";
import { SelectPage } from "@/shared/types";
import Home from "@/scenes/home";
import Beneficios from "@/scenes/beneficios/";

function App() {
  const [selectPage,setSelectPage]= useState<SelectPage>(SelectPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY === 0 ) {
        setIsTopOfPage(true);
        setSelectPage(SelectPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectPage={selectPage} 
      setSelectPage={setSelectPage}
      />
      <Home setSelectPage={setSelectPage}/>
      <Beneficios setSelectPage={setSelectPage}/>
    </div>
  );
}

export default App
