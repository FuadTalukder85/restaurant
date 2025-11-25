import { useForm, SubmitHandler } from "react-hook-form";

const CategoryModal = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      >
        <div
          className="bg-[#d6d4d43b] backdrop-blur-md w-[90%] max-w-xs md:max-w-[300px] border border-gray-500 text-white p-6 rounded-xl relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl text-center mb-6">Add Category</h2>
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                placeholder="Name"
                className="w-full px-4 py-2.5 border border-gray-400 text-sm rounded-full bg-[#686868] text-white placeholder-gray-100 outline-none"
              />
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

export default CategoryModal;
