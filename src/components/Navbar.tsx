import { PiDotsNineBold } from "react-icons/pi";

export default function Navbar(){
    return  <div className="fixed flex z-10 items-center p-20 gap-2 w-full justify-end">
        <button className=" bg-black hover:bg-gray-400 px-10 py-2 text-white font-semibold border-4 rounded-full">Hire Me </button>
        <PiDotsNineBold className="text-gray-400 text-3xl" />
        </div>
}