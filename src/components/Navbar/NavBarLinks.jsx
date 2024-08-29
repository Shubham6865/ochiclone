import React from 'react';


const NavBarLinks = () => {
    return (
        <>
            {["Services", "Our Work", "About Us", "Insights", "Contact"].map((item, index) => {
                // Format the item text for the URL
                const formattedItem = item.toLowerCase().replace(/\s+/g, '');

                return (
                    <a
                        href={`#${formattedItem}`} // Use hash link for scrolling
                        className={`relative text-lg font-light capitalize after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-zinc-900 after:transition-all after:duration-200 after:ease-in-out hover:after:w-full ${index === 4 ? "md:ml-32 ml-0" : ""}`}
                        key={index}
                    >
                        {item}
                    </a>
                );
            })}
        </>
    );
};

export default NavBarLinks;
