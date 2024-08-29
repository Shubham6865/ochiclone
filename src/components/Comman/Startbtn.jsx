import React, { useState } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Startbtn = ({ title }) => {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="start flex items-center gap-5  ">
            <div
                className={`   h-6 md:h-8  px-5 py-0 md:py-1  border-zinc-700 font-light text-md border-[1px] rounded-full uppercase transition-colors duration-300 ${isHovered && 'bg-zinc-900 text-white'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {title}
            </div>
            <div
                className={` w-6  md:w-8 h-6 md:h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-400 transition-colors duration-300 ${isHovered && 'bg-zinc-900 text-white'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <MdOutlineArrowOutward />
            </div>
        </div>
    )
}

export default Startbtn
