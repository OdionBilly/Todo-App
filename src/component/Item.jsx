import { MdDeleteForever, MdCheck,MdCancel } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Item( {itemData, deletItem , statusUpdate} ) {
     
     const {darkTheme} = useContext(ThemeContext)

  return (
    <div>
        <div className="flex justify-between h-14 items-center px-5 text-xs text-[#494c6b]">
            <div  className="flex items-center">

                {  itemData.complete ? ( 
                  <MdCheck
                  onClick={()=>statusUpdate(itemData.id)}
                 className={` ${darkTheme ? "text-[#494c6b]" : "text-[#3a7cfd]" } h-4 w-4 mr-3 cursor-pointer  `}
                 />
                ) :
                (
                  <MdCancel
                  onClick={()=>statusUpdate(itemData.id)}
                 className={` ${darkTheme ? "text-[#494c6b]" : "text-[#3a7cfd]" } h-4 w-4 mr-3 cursor-pointer  `
                 }/>
                )}

                <p className=" lg:text-[14px]">{itemData.text}</p>
            </div>

            <MdDeleteForever 
            onClick={()=> deletItem(itemData.id)} 
            className={`${darkTheme ? "text-[#494c6b]" : "text-red-300"} h-5 w-5 cursor-pointer`}/>
        </div>
        <div className="bg-[#c3E4F1]"></div>
    </div>
  )
}
