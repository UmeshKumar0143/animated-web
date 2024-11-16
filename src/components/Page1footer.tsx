import { useGSAP } from "@gsap/react"
import gsap from "gsap"
export default function Page1footer(){
    useGSAP(()=>{
        gsap.to('#rt-img img',{
            rotate: 360,
            repeat:-1,
            duration:2,
            ease:"linear"
            
        })
    })
    return <div className="mt-32  flex justify-between">
        <div>
        <h1 className="text-xl leading-[1.2vw] font-[anzo3] tracking-wide">BRAND DESIGN | WEBSITE DESIGN</h1>
        <h1 className="text-xl font-[anzo4]">BESPOKE FREELANCE</h1>
        </div>
        <div id="rt-img" className="-mt-32 flex flex-col gap-4 -mr-10">
            <img src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
            <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
        </div>
    </div>
}