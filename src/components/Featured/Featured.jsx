

import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import Startbtn from '../Comman/Startbtn'
const cardData = [
  {
    title: "Cardboard Spaceship",
    text: "FYDE",
    imgSrc: "https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png",
  },
  {
    title: "AH2 & Matt Horn",
    text: "VISE",
    imgSrc: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
  },
  {
    title: "TRAWA",
    text: "TRAWA",
    imgSrc: "https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg",
  },
  {
    title: "PREMIUM BLEND",
    text: "PREMIUMBLEND",
    imgSrc: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
  },
];

const Card = ({ card, index, animation }) => {
  return (
    <motion.div
      onHoverStart={() => animation.start({ y: "0" })}
      onHoverEnd={() => animation.start({ y: "100%" })}
      className="cardcontainer md:h-[75vh] px-4 md:px-0 relative overflow-hidden rounded-xl"
    >
      <div className="mb-3 flex items-center font-semibold uppercase">
        <div className="w-3 h-3 bg-zinc-900 rounded-full mr-5"></div>
        {card.title}
      </div>
      <h1 className="absolute z-[9] text-5xl md:text-8xl font-semibold leading-none tracking-tighter left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-['Founders_Grotesk_X-Condensed, Roboto, sans-serif'] text-[#CDEA68] flex overflow-hidden">
        {card.text.split('').map((item, i) => (
          <motion.span
            key={i}
            initial={{ y: "100%" }}
            animate={animation}
            transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            className="inline-block"
          >
            {item}
          </motion.span>
        ))}
      </h1>
      <div className="w-full h-full ">
        <img
          src={card.imgSrc}
          alt={`img ${index + 1} url not working`}
          className="w-full md:h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const Featured = () => {
  const cards = cardData.map(() => useAnimation());

  return (
    <div className="w-full px-0 md:px-[5vw] " id='ourwork'>
      <div className="w-full px-8 border-b-[1px] border-zinc-400 md:py-8">
        <h1 className="text-5xl font-['Neue_Montreal, Roboto, sans-serif'] tracking-tighter">
          Featured projects
        </h1>
      </div>
      <div className="px-1 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {cardData.map((card, index) => (
            <Card key={index} card={card} index={index} animation={cards[index]} />
          ))}
        </div>
      </div>
      <div className='my-5 flex justify-center items-center'>

        <Startbtn title={'View all case stuides'} />
      </div>
    </div>
  );
};

export default Featured;

