

import React from 'react';

const Cards = () => {
    return (
        <div className='w-full bg-zinc-100 md:flex gap-5 md:px-20 px-5 text-white my-20 md:my-2 items-center' id='services'>
            {/* First Card */}
            <div className="cardContainer md:w-1/2 h-[50vh] mb-10 md:mb-0">
                <div className="card w-full h-full bg-[#004D43] rounded-xl flex justify-center items-center relative">
                    <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute left-10 bottom-5 px-5 py-1 border-2 rounded-full'>&copy;2019</button>
                </div>
            </div>

            {/* Second Column containing Two Cards */}
            <div className="md:w-1/2 h-full">
                <div className="cardContainer h-[50vh] md:flex gap-5">
                    {/* Second Card */}
                    <div className="card md:w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center relative mb-10 md:mb-0">
                        <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <button className='absolute left-10 bottom-5 px-5 py-1 border-2 rounded-full'>&copy;2019</button>
                    </div>

                    {/* Third Card */}
                    <div className="card md:w-1/2 h-full bg-[#212121] rounded-xl flex justify-center items-center relative">
                        <img className='w-28' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <button className='absolute left-10 bottom-5 px-5 py-1 border-2 rounded-full'>&copy;2019</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
