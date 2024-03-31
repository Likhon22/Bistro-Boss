import { useState } from "react";
import { toast } from "react-hot-toast";
import { imageBBUpload } from "../../Utils/imageUpload";
import { addMenu } from "../../Utils/menu";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const AddItem = () => {
  const [selectCategory, setSelectCategory] = useState("");
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
    const imageForm = form.image.files[0];
    console.log(imageForm);
    const recipe = form.recipe.value;
    const imageData = await imageBBUpload(imageForm);
    console.log(imageData);
    const itemInfo = {
      name,
      price,
      category,
      image: imageData?.data?.display_url,
      recipe,
      adminEmail: user?.email,
    };
    try {
      const data = await addMenu(itemInfo);
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your food has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-[#d0d0d0] overflow-hidden w-4/5 lg:w-2/3  mx-auto  rounded-xl ">
      <Helmet>
        <title>Dashboard | Add Item</title>
      </Helmet>
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
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItem;
