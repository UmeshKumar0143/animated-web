import { useRef, useState } from "react";
import Page1footer from "../components/Page1footer";
import TiltText from "../components/TiltText";
import gsap from "gsap";

export default function Page1(){
   const tiltRef = useRef<HTMLDivElement>(null)
   const [Xval, setX] = useState(0); 
   const [Yval , setY] = useState(0); 
 const  handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) =>{
    
    if(tiltRef.current){
       setX((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/30); 
       setY(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/20); 

         gsap.to(tiltRef.current,{
            transform: `rotateX(${Yval}deg) rotateY(${Xval}deg)`,
            duration: 2,
            ease: 'power4.out' 

         })
    }
 }
    return <div  onMouseMove={(e)=>handleMouseMove(e)} className="h-screen   px-5 py-4">
        <div id="page-1-in" className="w-full p-20 h-full shadow-xl text-white shadow-gray-400 bg-cover bg-center bg-[url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_898,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg')]  rounded-[40px] ">
                <img className="h-20" src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
                <TiltText tiltRef ={tiltRef} />
                <Page1footer/>
            </div>
         </div>
}