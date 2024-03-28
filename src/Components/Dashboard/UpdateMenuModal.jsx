import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { updateMenu } from "../../Utils/menu";
import Swal from "sweetalert2";
const UpdateMenuModal = ({ menu, refetch }) => {
  const [selectCategory, setSelectCategory] = useState(menu?.category || "");

  const { user } = useAuth();
  const categories = [
    "salad",
    "drinks",
    "popular",
    "dessert",
    "pizza",
    "soup",
    "offered",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const category = selectCategory;

    const name = form.name.value;
    const price = Number(form.price.value);
    // const imageForm = form.image.files[0];
    // console.log(imageForm);
    const recipe = form.recipe.value;
    // const imageData = await imageBBUpload(imageForm);
    // console.log(imageData);
    const itemInfo = {
      name,
      price,
      category,
      // image: imageData?.data?.display_url,
      recipe,
      adminEmail: user?.email,
    };
    try {
      const data = await updateMenu(menu?._id, itemInfo);
      console.log(data);
      if (data?.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your menu has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        form.reset()
      }
    } catch (err) {
      console.log(err);
    }
    console.log(itemInfo);
  };
  return (
    <div className="bg-[#d0d0d0] overflow-hidden w-4/5  my-12  mx-auto  rounded-xl ">
      <form className=" p-4 md:p-6 lg:p-8" onSubmit={handleSubmit}>
        <div className=" flex flex-col justify-center gap-4 items-center ">
          <div className=" space-y-1 w-full">
            <label className="block">
              <span>Recipe Name</span>
            </label>
            <input
              className="rounded-lg py-1 pl-2 md:py-2 lg:py-3 w-full  "
              required
              type="text"
              name="name"
              defaultValue={menu?.name}
            />
          </div>
          <div className="w-full flex flex-col items-center justify-center lg:flex-row lg:gap-4">
            <div className=" overflow-hidden space-y-1 w-full ">
              <label className="block">
                <span>Category</span>
              </label>
              <select
                className="select select-bordered w-full  "
                onChange={(e) => setSelectCategory(e.target.value)}
                value={menu?.category}
                required
              >
                <option disabled selected value="">
                  Select Category
                </option>
                {categories?.map((category) => (
                  <option value={category} className="uppercase">
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1 w-full">
              <label className="block">
                <span>Price</span>
              </label>
              <input
                className="rounded-lg py-1 pl-2 md:py-2 lg:py-3 w-full "
                type="number"
                min={1}
                required
                defaultValue={menu?.price}
                name="price"
              />
            </div>
          </div>
          <div className="space-y-1 w-full">
            <label className="block">
              <span>Recipe Details</span>
            </label>
            <textarea
              name="recipe"
              className="rounded-lg w-full py-12 pl-2"
              required
              defaultValue={menu?.recipe}
            ></textarea>
          </div>
        </div>
        <div className="mt-4 ">
          <input type="file" name="image" id="image" accept="image/*" />
        </div>

        <button
          className="btn my-5  bg-yellow-700 hover:bg-yellow-600 duration-500 border-none text-white "
          type="submit"
        >
          Update Item
        </button>
      </form>
    </div>
  );
};

export default UpdateMenuModal;
