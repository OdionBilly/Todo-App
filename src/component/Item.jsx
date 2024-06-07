import { MdDeleteForever, MdCheck,MdCancel } from "react-icons/md"

export default function Item( {itemData} ) {
  return (
    <div>
        <div className="flex justify-between h-14 items-center px-5 text-xs text-[#494c6b]">
            <div  className="flex items-center">
                <MdCheck className="text-[#3a7cfd] h-4 w-4 mr-3 cursor-pointer" />
                <p className="text-gray lg:text-[14px]">{itemData.text}</p>
            </div>

            <MdDeleteForever className="text-red-300 h-5 w-5 cursor-pointer"/>
        </div>
        <div className="bg-[#c3E4F1]"></div>
    </div>
  )
}
