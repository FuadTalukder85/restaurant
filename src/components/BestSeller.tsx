import FoodCard from "./ul/FoodCard";
import item01 from "../assets/image/food01.png";
import item02 from "../assets/image/food02.png";
import item03 from "../assets/image/food03.png";
import ButtonFill from "./ul/ButtonFill";

const BestSeller = () => {
  const category = ["All", "breakfast", "lunch", "dinner"];
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="text-center">
        <h1 className="font-bold text-xl lg:text-3xl 2xl:text-[55px] text-secondary">
          Our best Seller Dishes
        </h1>
        <p className="max-w-[845px] text-base lg:text-xl 2xl:text-2xl tracking-wide mt-4 mx-auto text-secondary px-2 md:px-0">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoe all tossed in your choice of
          dressing.
        </p>
      </div>
      {/* category */}
      <div className="flex md:flex-wrap md:gap-4 justify-between items-center mt-14 md:mb-6 px-2 md:px-0">
        <div>
          {category.map((cat, index) => (
            <button
              key={index}
              className="px-3 md:px-6 py-2 md:py-3 lg:mx-3 rounded-full border border-gray capitalize text-[7px] lg:text-xl 2xl:text-3xl cursor-pointer hover:bg-[#2C2C2C] hover:text-white transition-all duration-500"
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-1 md:gap-3 text-[7px] lg:text-xl 2xl:text-3xl">
          <ButtonFill name="Add Food" />
          <ButtonFill name="Add Category" />
        </div>
      </div>
      {/* food card */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-5 2xl:mt-16 px-2 md:px-0">
        <FoodCard
          image={item01}
          itemName="Salad Fry"
          category="Breakfast"
          price="230"
        />
        <FoodCard
          image={item02}
          itemName="Chicken Breast"
          category="Lunch"
          price="230"
        />
        <FoodCard
          image={item03}
          itemName="Chicken Legs"
          category="Dinner"
          price="230"
        />
      </div>
    </div>
  );
};

export default BestSeller;
