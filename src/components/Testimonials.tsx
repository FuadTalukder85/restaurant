"use client";

import Image from "next/image";
import clientImg from "../assets/image/client.png";
import chefImage from "../assets/image/chefImage.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Testimonials = () => {
  const clients = [
    {
      details:
        "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
      name: "Tayyab Sohail",
      role: "UX/UI Designer",
      image: clientImg,
    },
    {
      details:
        "Simple but delicious. The crust was perfectly crisp with a smoky edge, the tomatoes tasted fresh, and the mozzarella was melty and rich. Classic done right.",
      name: "Nayeem Hasan",
      role: "Developer",
      image: clientImg,
    },
    {
      details:
        "Juicy and satisfying. The patties were cooked to perfection, cheese melted like a dream, and the toasted brioche bun held it all together. Great value for a casual bite.",
      name: "Tamim Hasan",
      role: "Graphic Designer",
      image: clientImg,
    },
  ];
  const NextArrow = ({
    onClick,
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => (
    <button
      onClick={onClick}
      className="z-50 absolute right-4 bottom-6 -translate-y-1/2 bg-[#F5878752] text-white p-1 rounded-full md:hidden"
    >
      <IoIosArrowForward />
    </button>
  );

  const PrevArrow = ({
    onClick,
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => (
    <button
      onClick={onClick}
      className="z-50 absolute right-12 bottom-6 -translate-y-1/2 bg-[#F5878752] text-white p-1 rounded-full md:hidden"
    >
      <IoIosArrowBack />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };

  return (
    <div className="max-w-[740px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 mt-9 overflow-hidden px-2 md:px-0">
      {/* left part */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-black text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-4 mt-10 md:mt-0">
          Customer <span className="text-[#AD1519]">Feedback</span>
        </h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index}>
                <p className="text-[#3D3D3D] text-sm md:text-2xl font-normal pr-4">
                  {client.details}
                </p>
                <div className="flex gap-4 items-center mt-20 md:mt-[138px] md:pb-10">
                  <Image
                    src={client.image}
                    alt="client image"
                    width={74}
                    height={74}
                    className="rounded-full border-2 border-black"
                  />
                  <div className="">
                    <h2 className="text-[#A52A2A] md:text-2xl font-bold">
                      {client.name}
                    </h2>
                    <p className="text-black text-lg font-medium">
                      {client.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* right part */}
      <motion.div
        className="md:w-full lg:w-1/2 flex justify-center"
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          backgroundImage: `url(https://i.ibb.co/Rpw0gMM2/photo-bg.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
        }}
      >
        <Image src={chefImage} width={590} height={590} alt="chef image" />
      </motion.div>
    </div>
  );
};

export default Testimonials;
