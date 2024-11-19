export default function Page2(){
    return <div >
                <div className="mt-10">
                    <h1 className="text-center text-2xl font-[anzo4]">
                    ©  anzo.studio 2024 | designed and developed</h1>
                </div>
                {["Impactful","Design","is the","design","that"].map((item,index)=>
                    <div className="anim-text" key={index}>
                    <h1 className="text-[40vw] text-center uppercase leading-[33vw] font-[anzo1]">{item}</h1>
                </div>
                )}
                <div>
                    <h1 className="text-[40vw] text-center uppercase leading-[33vw] font-[anzo1]">Works</h1>
                </div>
                
         </div>
}