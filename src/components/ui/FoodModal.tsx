import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useForm, SubmitHandler } from "react-hook-form";

const FoodModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const image = watch("image");
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue("image", acceptedFiles[0]);
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

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
                className="w-full px-4 py-2.5 border border-gray-400 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
              />
              <input
                placeholder="Food Category"
                className="w-full px-4 py-2.5 border border-gray-400 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
              />
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
              <button className="w-full text-base bg-[#D3332F] hover:bg-red-700 px-4 py-2 rounded-full text-white transition disabled:opacity-50">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodModal;
