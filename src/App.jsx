import MoonIcon from "./assets/icon-moon.svg";
import SunIcon from "./assets/icon-sun.svg";
import './App.css'
import Addform from "./component/Addform";
import Nav from "./component/Nav";
import { useContext  } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const {darkTheme, handleTheme} = useContext(ThemeContext)

  return ( 
    
      <div className={`${darkTheme ? "bg-slate-900"  : " bg-[#f2f2f2]" } min-h-screen pb-20 relative`} >
        <div className="bg-light_header_image_mobile lg:bg-light_header_image bg-no-repeat bg-cover h-52 px-5 lg:px-0 pt-10">
          <div className="flex justify-between lg:w-3/6 lg:mx-auto">
            <p className="Text-3xl font-semibold text-white tracking-[6px]">TODO</p>

            <img onClick={handleTheme}src={darkTheme ? SunIcon : MoonIcon}
             alt=" icon"className="h-5 cursor-pointer" />
          </div>

          <div className="mt-8 lg:w-3/6 lg:mx-auto ">
            <Addform/>
          </div>
          <div className="bg-white lg:w-3/6 lg:mx-auto mx-5 relative top-5 rounded-md">
            <Nav/>
            <div className="flex justify-between items-center px-5 h-15 text-sm lg:text-[16px] text-[#9495a5]">
              Add new Todo item!!!
              <button className=" focus:font-bold" type="button">
                clear completed
              </button>
            </div>
          </div>
        </div>
      </div>
    
      
  
  )
}

export default App