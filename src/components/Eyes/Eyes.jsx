import React, { useState, useEffect } from 'react'

const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180)

        })
    })
    return (
        <div className='eyes w-full h-[60vh] md:h-screen  overflow-hidden' id='insights'>
            <div data-scroll data-scroll-speed="-0.3" className=" relative w-full h-[40vh] md:h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10  ">
                    {/* first eye */}
                    <div className='w-[22vw] md:w-[15vw] h-[22vw] md:h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-9 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">

                                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                            </div>
                            <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-bold text-white'>Play</h1>
                        </div>
                    </div>
                    {/* second eye */}
                    <div className='w-[22vw] md:w-[15vw] h-[22vw] md:h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center'>
                        <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className="line w-full h-9 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">

                                <div className="w-6 h-6 rounded-full bg-zinc-100"></div>
                            </div>
                            <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-bold text-white'>Play</h1>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Eyes
