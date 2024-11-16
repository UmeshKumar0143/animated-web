import Page1footer from "../components/Page1footer";
import TiltText from "../components/TiltText";

export default function Page1(){
    return <div className="h-screen  px-5 py-4">
        <div className="w-full p-20 h-full shadow-xl text-white shadow-gray-400 bg-cover bg-center bg-[url('https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_898,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg')]  rounded-[40px] ">
                <img className="h-20" src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
                <TiltText/>
                <Page1footer/>
            </div>
         </div>
}