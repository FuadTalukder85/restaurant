"use client";
import { ItemType } from "@/types/item.types";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { createItem } from "@/services/item.service";
import toast from "react-hot-toast";
import { getCat } from "@/services/cat.service";

const FoodModal = ({ onClose }) => {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cat"],
    queryFn: getCat,
  });
  const categories = Array.from(new Set(data?.map((i) => i.category)));

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<ItemType>();

  const image = watch("image");
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue("image", acceptedFiles[0], { shouldValidate: true });
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  const onSubmit: SubmitHandler<ItemType> = async (data) => {
    if (!data.image) return;
    setLoading(true);
    try {
      const imageForm = new FormData();
      imageForm.append("image", data.image);
      const imgBBRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        imageForm,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      const imageUrl = imgBBRes.data.data.url;
      const payload = {
        category: data.category,
        item_name: data.item_name,
        image: imageUrl,
      };

      await createItem(payload);
      toast.success("Item added successfully!", { position: "top-right" });
      onClose();
    } catch (err: any) {
      console.error("Failed to post item:", err);
      toast.error("Failed to add item!", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      >
        <div
          className="bg-[#d6d4d43b] backdrop-blur-md w-[90%] max-w-xs md:max-w-[330px] border border-white text-white p-6 rounded-xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl text-center mb-4">Add Food</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
              <input
                placeholder="Food Name"
                {...register("item_name", { required: true })}
                className="w-full px-4 py-2.5 border border-gray-400 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
              />
              {errors.item_name && (
                <p className="text-red-400 text-sm">Food Name is required</p>
              )}
              {/* <input
                placeholder="Food Category"
                {...register("category", { required: true })}
                className="w-full px-4 py-2.5 border border-gray-400 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
              /> */}
              <div className="relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="w-full px-4 py-2.5 border border-gray-400 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
                >
                  {watch("category") || "Food Category"}
                </div>

                {/* Dropdown */}
                {open && (
                  <div className="absolute left-0 right-0 mt-1 bg-[#686868] text-white rounded-xl p-3 space-y-2 shadow-lg z-50">
                    {categories.map((cat) => (
                      <p
                        key={cat}
                        onClick={() => {
                          setValue("category", cat);
                          setOpen(false);
                        }}
                        className="cursor-pointer hover:bg-gray-600 px-2 py-1 rounded-md"
                      >
                        {cat}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              {errors.category && (
                <p className="text-red-400 text-sm">Category is required</p>
              )}
              <div
                {...getRootProps()}
                className="border border-dashed border-red-500 px-4 py-3 text-center text-sm text-gray-200 bg-[#6C4C4D] rounded-full cursor-pointer transition hover:bg-red-400/10"
              >
                <input {...getInputProps()} />
                {image ? (
                  <p className="text-white">{image.name}</p>
                ) : isDragActive ? (
                  <p>Drop the image here...</p>
                ) : (
                  <p>Upload or Drag image here</p>
                )}
              </div>
              {errors.image && (
                <p className="text-red-400 text-sm">Image is required</p>
              )}
              <button className="w-full text-base bg-[#D3332F] hover:bg-red-700 px-4 py-2 rounded-full text-white transition disabled:opacity-50">
                {loading ? "Saving" : "Save"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodModal;
