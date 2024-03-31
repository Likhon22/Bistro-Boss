import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import { deleteMenu, getMenuForAdmin } from "../../Utils/menu";
import HeadingText from "../../Components/HeadingText/HeadingText";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";
import UpdateMenuModal from "../../Components/Dashboard/UpdateMenuModal";
import { Helmet } from "react-helmet-async";

const ManageItem = () => {
  const [role] = useRole();
  const { user } = useAuth();
  const [prevMenu, setPrevMenu] = useState({});
  let [isOpen, setIsOpen] = useState();

  const {
    data: menus = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["item"],
    queryFn: async () => {
      return await getMenuForAdmin(user?.email);
    },
  });
  const handleMenu = (item) => {
    setPrevMenu(item);
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteMenu(id);
        if (res.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your food has been deleted.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | Manage Items</title>
      </Helmet>
      <HeadingText
        headingText={"manage all items"}
        subText={"Hurry Up!"}
      ></HeadingText>
      <div className="flex justify-center items-center w-4/5 mx-auto ">
        {isLoading ? (
          <div className="flex justify-center items-center ">
            <p>Loading.......</p>
          </div>
        ) : (
          <div className="bg-[#f6f6f6] w-full p-12 rounded-lg mb-32 ">
            <div className="flex justify-between  ">
              <p className="text-3xl text-black font-semibold">
                Total Items:{menus.length}
              </p>
            </div>
            {/* table */}
            <div className="overflow-x-auto mt-12">
              <table className="table">
                {/* head */}
                <thead className="bg-[#d1a054] ">
                  <tr>
                    <th></th>
                    <th className="uppercase text-white font-medium ">
                      Item Image
                    </th>
                    <th className="uppercase text-white font-medium">
                      Item Name
                    </th>
                    <th className="uppercase text-white font-medium">Price</th>
                    <th className="uppercase text-white font-medium">Action</th>
                    <th className="uppercase text-white font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {menus?.map((item, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>
                        <img className="w-[75px]" src={item.image} alt="" />
                      </td>
                      <td className=" capitalize">{item.name}</td>
                      <td>${item?.price}</td>
                      <td className="text-white  cursor-pointer ">
                        <button
                          className="cursor-pointer"
                          onClick={() => handleMenu(item)}
                        >
                          <FaPen
                            onClick={() =>
                              document.getElementById("my_modal_1").showModal()
                            }
                            className="bg-[#d1a054] py-2   text-4xl"
                          ></FaPen>
                        </button>
                        <dialog
                          id="my_modal_1"
                          className="modal z-40 text-black"
                        >
                          <div className="modal-box">
                            <div className="modal-action">
                              <UpdateMenuModal
                                menu={prevMenu}
                                refetch={refetch}
                              ></UpdateMenuModal>
                            </div>
                            <form method="dialog">
                              <button className="btn bg-red-500 text-white">
                                Close
                              </button>
                            </form>
                          </div>
                        </dialog>
                      </td>
                      <td className="text-red-600 cursor-pointer ">
                        <MdDelete
                          className="text-4xl "
                          onClick={() => handleDelete(item._id)}
                        ></MdDelete>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageItem;
