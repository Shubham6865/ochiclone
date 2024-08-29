import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import NavBarLinks from './NavBarLinks';
import { RxCross1 } from "react-icons/rx";
import { motion } from 'framer-motion';
import { IoMenu } from "react-icons/io5";

const NewNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const variants = {
        open: {
            height: 'auto',
            opacity: 1,
            transition: { duration: 0.5 },
        },
        closed: {
            height: 0,
            opacity: 0,
            transition: { duration: 0.5 },
        },
    };

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY < lastScrollY) {
                setShowNavbar(true);  // Scroll up
            } else {
                setShowNavbar(false); // Scroll down
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className='p-1  bg-[#F1F1F1] shadow-md'>

                <div className='flex justify-between'>
                    <div className='flex'>
                        <Logo />
                    </div>
                    <div className="hidden links md:flex gap-10">
                        <NavBarLinks />
                    </div>

                    <button className='lg:hidden scale-125' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <RxCross1 className='scale-150 mr-2' /> : <IoMenu className='scale-150 mr-2' />}
                    </button>
                </div>

                <motion.div
                    className="overflow-hidden"
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={variants}
                >
                    <div className="links flex flex-col items-center mb-2 z-50">
                        <NavBarLinks />
                    </div>
                </motion.div>
            </div>
        </nav>
    );
};

export default NewNavbar;
