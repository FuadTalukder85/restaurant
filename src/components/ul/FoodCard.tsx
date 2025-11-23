import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const FoodCard = ({ image, itemName, category, price }) => {
  return (
    <div className="bg-white rounded-lg shadow w-full pb-8">
      <Image
        src={image}
        alt={image}
        width={300}
        height={200}
        className="w-full object-cover"
      />
      <div className="flex justify-between items-center p-2 md:p-5">
        <h3 className="text-xs md:text-xl lg:text-2xl 2xl:text-3xl font-medium">
          {itemName}
        </h3>
        <span className="font-medium bg-red-500 text-white px-5 py-2 md:text-xl rounded-full">
          {category}
        </span>
      </div>
      <div className="flex justify-between items-center px-5">
        <div className="flex items-center gap-2 text-yellow-400 text-sm">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-[#FF9E0C] text-md md:text-xl">
              <FaStar />
            </span>
          ))}
        </div>
        <p className="font-bold text-lg md:text-4xl">${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;
