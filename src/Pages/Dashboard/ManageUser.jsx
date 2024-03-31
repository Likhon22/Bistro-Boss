import { useQuery } from "@tanstack/react-query";
import { getUser, updateUserRole } from "../../Utils/user";
import HeadingText from "../../Components/HeadingText/HeadingText";
import { MdDelete } from "react-icons/md";
import UpdateUserModal from "../../Components/Dashboard/UpdateUserModal";
import { useState } from "react";

import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const closeModal = () => {
    setIsOpen(false);
  };
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["getUser"],
    queryFn: async () => {
      return await getUser();
    },
  });
  const handleOpen = (userEmail) => {
    setIsOpen(true);
    setEmail(userEmail);
  };
  const handleUserRole = async (role) => {
    console.log(email);

    console.log(role);
    const roleInfo = {
      role,
    };
    try {
      Swal.fire({
        title: "Are you sure ?",
        text: "You won't be able to change this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Update User role!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data = await updateUserRole(roleInfo, email);
          console.log(data);
          refetch();
          if (data?.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: "User role has been updated.",
              icon: "success",
            });
          }
        }
      });
    } catch (error) {
      // Handle errors here
      console.error(error);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | Manage Users</title>
      </Helmet>
      <HeadingText
        headingText={"manage all users"}
        subText={"How Many??"}
      ></HeadingText>
      <div className="flex justify-center items-center w-4/5 mx-auto ">
        <div className="bg-[#f6f6f6] w-full p-12 rounded-lg mb-32 ">
          <div>
            <p className="text-3xl text-black font-semibold">
              Total Users:{users?.length}
            </p>
          </div>
          {/* table */}
          <div className="overflow-x-auto mt-12">
            <table className="table">
              {/* head */}
              <thead className="bg-[#d1a054] ">
                <tr>
                  <th></th>
                  <th className="uppercase text-white font-medium ">Name</th>
                  <th className="uppercase text-white font-medium">Email</th>
                  <th className="uppercase text-white font-medium">Role</th>
                  <th className="uppercase text-white font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users?.map((user, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td className="flex flex-col justify-start items-baseline">
                      <div>
                        {" "}
                        <button
                          onClick={() => handleOpen(user?.email)}
                          className=" bg-slate-400 p-2 text-white rounded-lg "
                        >
                          {user?.role}
                        </button>
                        <UpdateUserModal
                          isOpen={isOpen}
                          setIsOpen={setIsOpen}
                          user={user}
                          handleUserRole={handleUserRole}
                        ></UpdateUserModal>
                      </div>
                    </td>

                    <td className="text-red-600 text-xl cursor-pointer ">
                      <MdDelete
                        onClick={() => handleDelete(item._id)}
                      ></MdDelete>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
