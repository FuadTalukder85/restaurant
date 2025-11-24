"use client";
import Image from "next/image";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import menu01 from "../assets/image/item01.png";
import menu02 from "../assets/image/item02.png";
import menu03 from "../assets/image/item03.png";
import menu04 from "../assets/image/item04.png";

const Hero = () => {
  const menuImages = [menu01, menu02, menu03, menu04];
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const handleClick = (index: number) => {
    if (index === activeIndex) return;
    if (Math.abs(index - activeIndex) === 1) {
      setDirection(index > activeIndex);
      setPrevIndex(activeIndex);
      setActiveIndex(index);
    }
  };

  const bgColors = ["#880808", "#0A4669", "#953553", "#036566"];
  const changeColors = ["#A52A2A", "#0A3659", "#A95C68", "#003333"];
  const fullText =
    "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.";

  const cutUntil = "start our day.";
  const index = fullText.indexOf(cutUntil) + cutUntil.length;
  const firstPart = fullText.slice(0, index);
  const restPart = fullText.slice(index);

  return (
    <motion.div
      className="bg-[#880808] relative overflow-hidden rounded-b-md"
      initial={{ backgroundColor: bgColors[activeIndex] }}
      animate={{ backgroundColor: bgColors[activeIndex] }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div className="absolute -top-56 md:-top-48 -left-56 lg:-left-96 xl:-left-80 2xl:-left-48 z-10">
        <motion.div
          className="w-[500px] md:w-[1000px] h-[500px] lg:h-[700px] xl:h-[800px] 2xl:h-[1000px] rounded-full"
          animate={{ backgroundColor: changeColors[activeIndex] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </motion.div>
      <div className="max-w-3xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[1920px] relative mx-auto z-50 py-8 md:py-14 px-5 xl:px-10 2xl:px-14">
        {/* Search */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-between items-center"
        >
          <h5 className="hidden md:block text-3xl font-bold text-white">
            RESTAURANT
          </h5>
          <div className="relative mx-auto md:mx-0">
            <div>
              <input
                type="text"
                placeholder="Search...."
                className="bg-white text-black font-normal text-base py-2 px-10 rounded-2xl w-[343px] md:w-lg xl:w-2xl 2xl:w-[821px]"
              />
              <span className="absolute top-2.5 left-2.5 text-[#414141] text-2xl">
                <CiSearch />
              </span>
            </div>
          </div>
        </motion.div>

        {/* banner content */}
        <div className="md:grid grid-cols-2 mt-5 lg:mt-12 xl:mt-20 2xl:mt-36 gap-6">
          {/* left side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-[45px] md:text-6xl xl:text-8xl px-10 md:px-0 text-white">
              BREAKFAST
            </h1>
            <p className="px-7 md:px-0 lg:w-lg xl:w-2xl 2xl:w-4xl text-base md:text-xl font-normal 2xl:font-bold text-white">
              {/* see more */}
              <span className="md:hidden">
                {firstPart}
                {!expanded && (
                  <button
                    onClick={() => setExpanded(true)}
                    className="text-white underline ml-1 inline"
                  >
                    See more
                  </button>
                )}
                {expanded && <span>{restPart}</span>}
              </span>
              {/* full text */}
              <span className="hidden md:block">{fullText}</span>
            </p>

            <motion.div
              key={`active-${activeIndex}`}
              className="absolute md:hidden top-105 right-0"
              initial={
                direction
                  ? { opacity: 0, x: 200, y: -200, rotate: 90 }
                  : { opacity: 0, x: -200, y: 200, rotate: -90 }
              }
              animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              style={{
                originX: 1,
                originY: 0.5,
                zIndex: 2,
              }}
            >
              <Image
                src={menuImages[activeIndex]}
                alt={`active-${activeIndex}`}
                height={950}
                width={650}
              />
            </motion.div>
            {/* items */}
            <div className="flex gap-4">
              {menuImages.map((img, index) => (
                <motion.div
                  key={index}
                  onClick={() => handleClick(index)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer mt-96 md:mt-0"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.4 }}
                >
                  <div className="relative w-[70px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[100px] lg:h-[100px] 2xl:w-[200px] 2xl:h-[200px]">
                    <Image
                      src={img}
                      alt={`menu${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {activeIndex === index && (
                    <motion.hr
                      className="md:mt-3 h-1 bg-white w-16 2xl:w-28 mx-auto border-none"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{ originX: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* right side */}
          <div className="w-full flex justify-end relative overflow-visible md:h-[625px]">
            <AnimatePresence>
              {prevIndex !== null && prevIndex !== activeIndex && (
                <motion.div
                  key={`prev-${prevIndex}`}
                  className="absolute top-0 right-0 hidden md:block"
                  initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                  animate={
                    direction
                      ? { opacity: 0, x: -200, y: 200, rotate: -90 }
                      : { opacity: 0, x: 200, y: -200, rotate: 90 }
                  }
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  style={{
                    originX: 1,
                    originY: 0.5,
                    zIndex: 1,
                  }}
                >
                  <div className="relative w-[650px] h-[650px] sm:w-[650px] sm:h-[650px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px]">
                    <Image
                      src={menuImages[activeIndex]}
                      alt={`active-${activeIndex}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              )}
              <motion.div
                key={`active-${activeIndex}`}
                className="absolute hidden md:block top-0 right-0"
                initial={
                  direction
                    ? { opacity: 0, x: 200, y: -200, rotate: 90 }
                    : { opacity: 0, x: -200, y: 200, rotate: -90 }
                }
                animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{
                  originX: 1,
                  originY: 0.5,
                  zIndex: 2,
                }}
              >
                <div className="relative w-[650px] h-[650px] sm:w-[650px] sm:h-[650px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px]">
                  <Image
                    src={menuImages[activeIndex]}
                    alt={`active-${activeIndex}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute -bottom-56 -right-56 md:-bottom-[420px] md:-right-[420px] z-10"
        key={activeIndex}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
          times: [0, 0.5, 1],
        }}
      >
        <motion.div
          className="w-[500px] md:w-[1000px] h-[500px] md:h-[1000px] rounded-full"
          animate={{ backgroundColor: changeColors[activeIndex] }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};
export default Hero;
