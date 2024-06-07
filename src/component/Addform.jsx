import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Addform({addTodo}) {
  const {darkTheme} = useContext(ThemeContext);

  const [item, setItem] = useState("")

  const handleSubmit = (e)=> {
    e.preventDefault();
    addTodo(item);
  };
  
  console.log({item});

  return (
    <div className={`${darkTheme ? "bg-[#25273d]" : "bg-white"
    } py-2 lg:py-5 px-5 rounded-md`}>

        <form onSubmit={handleSubmit}className="flex items-center">
            <div className="relative w-full">
               <input className= {`${darkTheme ? "bg-[#25273d] focus:bg-[#2f314c] focus:text-white" : "bg-white"}
                text-gray-900 text-sm lg:py-2 py-1 px-3 block w-full focus:outline-none`}
               type="text"placeholder="create new todo-item" required 
               value={item}
               onChange={(e)=> setItem(e.target.value)}
               />
            </div>
            <button type="submit" className="bg-[#3a7cfd] hover:bg-[#366fe1] inline-flex items-center py-2.5 px-3 lg:px-7 ml-2 text-xs font-medium text-white rounded-lg">
                add
            </button>
        </form>

    </div>
  )
}
