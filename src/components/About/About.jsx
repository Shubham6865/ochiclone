import React, { useState } from 'react'
import image2 from '../../assets/image02.jpg'
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from 'framer-motion';
const About = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (


        <div className='w-full p-[5vw] -mt-10  bg-[#CDEA68] rounded-t-3xl text-black ' id='aboutus'>
            <h1 className=" font-['Neue_Montreal, Roboto, sans-serif'] text-[3.5vw] leading-[3.5vw] pt-4 md:pt-0  ">Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className='underline'>raise funds</span>, <span className='underline'>sell products</span>, <span className='underline'> explain complex ideas</span>, and <span className='underline'>hire great people.</span> </h1>

            <div className="w-full md:flex font-['Neue_Montreal, Roboto, sans-serif'] border-t-[1px] pt-10 mt-10 border-[#a1b562]">
                <div className="w-1/2 mb-6">What you can expect:</div>
                <div className="md:w-1/2 md:flex gap-4 ">
                    <div className="md:w-1/2">
                        <p>
                            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</p>
                        <p className='mt-6 md:mt-3'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className="mt-4 w-1/2 flex flex-col justify-center md:pl-10 ">

                        <h1 className='mb-5'>S:</h1>

                        {
                            ["Instagram", "Behance", "Facebook", "Linkedin"].map((item, index) => (

                                <p key={index}>
                                    <span className="relative border-b border-zinc-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-zinc-900 after:transition-all after:duration-500 after:ease-out hover:after:w-full"> {item}</span>
                                </p>
                            ))
                        }


                    </div>
                </div>
            </div>


            <div className="w-full border-t-[1px] pt-10 mt-10 border-[#a1b562] md:flex">
                <div className='md:w-1/2 '>
                    <h1 className=' text-5xl'>Out approch :</h1>


                    <div
                        className="h-10 my-5 bg-zinc-900 inline-block rounded-full text-white font-bold"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="start flex items-center gap-5">
                            <div
                                className={`px-5 py-1  font-semibold text-md  rounded-full uppercase `}
                            >
                                Read More
                            </div>
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full   `}
                            >
                                <motion.div
                                    transition={{ ease: 'linear', duration: 0.4 }}
                                    className={`w-2 h-2 bg-zinc-100 rounded-full transition-all ${isHovered && 'w-5 h-5'
                                        }`}
                                ></motion.div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="md:w-1/2 h-[60vh] rounded-3xl overflow-hidden">
                    {/* Img */}
                    <img src={image2} alt="img missing   " className={` rounded-3xl w-full h-[40vh] md:h-full bg-cover transition-all ease-linear ${isHovered && 'scale-95'}`} />
                </div>
            </div>
        </div >


    )
}

export default About
