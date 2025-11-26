"use client";
import FoodCard from "./ui/FoodCard";
import ButtonFill from "./ui/ButtonFill";
import { useState } from "react";
import FoodModal from "./ui/FoodModal";
import CategoryModal from "./ui/CategoryModal";
import { useQuery } from "@tanstack/react-query";
import { getCat } from "@/services/cat.service";
import { getItems } from "@/services/item.service";
import { ItemType } from "@/types/item.types";
import { CatType } from "@/types/cat.types";

const BestSeller = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCatModal, setShowCatModal] = useState(false);
  const [activeCat, setActiveCat] = useState("All");
  const { data, isLoading } = useQuery<CatType[]>({
    queryKey: ["cat"],
    queryFn: getCat,
  });
  const { data: items } = useQuery<ItemType[]>({
    queryKey: ["item"],
    queryFn: getItems,
  });
  // filter by category
  const baseCats = ["All", ...(data?.map((c) => c.category) || [])];
  const dynamicCategories =
    typeof window !== "undefined" && window.innerWidth < 768
      ? [...baseCats.slice(1), "All"]
      : baseCats;
  const filteredItems =
    activeCat === "All"
      ? items
      : items?.filter((item) => item.category === activeCat);
  if (isLoading) return <p className="py-10 text-center">Loading...</p>;
  return (
    <div className="max-w-[740px] lg:max-w-[1000px] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto mt-10 lg:mt-24 2xl:mt-36">
      <div className="text-center">
        <h1 className="font-bold text-3xl xl:text-4xl 2xl:text-[55px] text-secondary">
          Our best Seller Dishes
        </h1>
        <p className="hidden md:block max-w-lg 2xl:max-w-[845px] text-base lg:text-xl 2xl:text-2xl tracking-wide mt-4 mx-auto text-secondary px-2 md:px-0">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoe all tossed in your choice of
          dressing.
        </p>
        <p className="md:hidden max-w-lg 2xl:max-w-[845px] text-base lg:text-xl 2xl:text-2xl tracking-wide mt-4 mx-auto text-secondary px-2 md:px-0">
          Our fresh garden salad is a light and refreshing option.
        </p>
      </div>
      {/* category */}
      <div className="flex md:flex-wrap justify-between items-center mt-8 md:mt-14 md:mb-6 px-2 md:px-0">
        <div>
          {dynamicCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActiveCat(cat)}
              className={`px-3 md:px-6 py-2 md:py-3 mx-0.5 lg:mx-3 rounded-full border border-gray capitalize text-[7px] md:text-sm lg:text-xl 2xl:text-3xl cursor-pointer hover:bg-[#2C2C2C] hover:text-white transition-all duration-500 ${
                activeCat === cat
                  ? "bg-[#2C2C2C] text-white"
                  : "hover:bg-[#2C2C2C] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-1 md:gap-3 text-[7px] lg:text-xl 2xl:text-3xl">
          <ButtonFill name="Add Food" onClick={() => setShowModal(true)} />
          <ButtonFill
            name="Add Category"
            onClick={() => setShowCatModal(true)}
          />
        </div>
      </div>
      {/* food card */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-5 md:mt-10 xl:mt-16 px-2 md:px-0">
        {filteredItems?.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">
            No items found.
          </p>
        ) : (
          filteredItems?.map((item: ItemType, index: number) => (
            <FoodCard
              key={index}
              image={item.image}
              itemName={item.item_name}
              category={item.category}
              price="230"
            />
          ))
        )}
      </div>
      {showModal && <FoodModal onClose={() => setShowModal(false)} />}
      {showCatModal && <CategoryModal onClose={() => setShowCatModal(false)} />}
    </div>
  );
};

export default BestSeller;
