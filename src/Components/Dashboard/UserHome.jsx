import { TypeAnimation } from "react-type-animation";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getPaymentHistoryForUser } from "../../Utils/payment";
import { getRatingForUserEmail } from "../../Utils/rating";
import userImg from "../../assets/assets/user.jpg";
import { Helmet } from "react-helmet-async";

const UserHome = () => {
  const { user } = useAuth();
  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      return await getPaymentHistoryForUser(user?.email);
    },
  });
  const { data: rating = [] } = useQuery({
    queryKey: ["userRating"],
    queryFn: async () => {
      return await getRatingForUserEmail(user?.email);
    },
  });
  const name = user?.displayName ? user?.displayName : "Back";
  return (
    <div>
      <Helmet>
        <title>Dashboard | User Home</title>
      </Helmet>
      <div>
        <div className="flex justify-center items-center">
          <TypeAnimation
            sequence={[
              `Hi welcome ${name}!`, // Text for the site owner
              1000, // Wait 1 second
              "How can I assist you today?", // Second sequence
              1000, // Wait 1 second
              "Feel free to explore our site's features.", // Third sequence
              1000, // Wait 1 second
              "Let me know if you need any help managing your order.", // Fourth sequence
              1000, // Wait 1 second
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={3}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-16 gap-12 w-11/12 mx-auto ">
          <div className="w-1/2 bg-[#ffedd5] py-12 flex flex-col rounded-xl justify-center items-center space-y-4">
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-cyan-400 ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL ? user.photoURL : userImg} />
              </div>
            </div>
            <h3 className="text-2xl ">{user?.displayName}</h3>
          </div>
          <div className="w-1/2 bg-[#fef9c3] py-12 flex flex-col rounded-xl justify-center items-center space-y-4">
            <h3 className="text-2xl">Your Activities</h3>
            <p className="text-[#0088fe] text-xl font-bold">
              Orders:{orders?.length}
            </p>
            <p className="text-cyan-400 text-xl font-bold">
              Rating:{rating?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
