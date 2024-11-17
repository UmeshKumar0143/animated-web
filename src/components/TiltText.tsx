import {RefObject} from "react"

interface props {
    tiltRef: RefObject<HTMLDivElement>
}

export default function TiltText({tiltRef}:props){
    return <div ref={tiltRef} id="tilttext" className="mt-28  ">
            <h1 className="text-[4vw] font-[anzo3] leading-[4.3vw]">I AM <span className="text-black">DARK MODE</span>™</h1>
            <h1 className="text-[7.3vw] font-[anzo3] leading-[5.3vw]">DESIGNER</h1>
            <h1 className="text-[4vw] font-[anzo3] leading-[4.3vw]">TO HIRE</h1>
    </div>
}




