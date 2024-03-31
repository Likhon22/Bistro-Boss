import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { getPaymentHistoryForUser } from "../../Utils/payment";
import HeadingText from "../../Components/HeadingText/HeadingText";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const {
    data: payments,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["paymentHistoryUser"],
    queryFn: async () => {
      return await getPaymentHistoryForUser(user?.email);
    },
  });
  return (
    <div>
      <Helmet>
        <title>Dashboard | Payment History</title>
      </Helmet>
      <HeadingText
        headingText={"wanna add more?"}
        subText={"My Cart"}
      ></HeadingText>
      <div className="flex justify-center items-center w-4/5 mx-auto ">
        <div className="bg-[#f6f6f6] w-full p-12 rounded-lg mb-32 ">
          <div className="flex justify-between  ">
            <p className="text-3xl text-black font-semibold">
              Total Payments:{payments?.length}
            </p>
          </div>
          {/* table */}
          <div className="overflow-x-auto mt-12">
            <table className="table">
              {/* head */}
              <thead className="bg-[#d1a054] ">
                <tr>
                  <th></th>
                  <th className="uppercase text-white font-medium ">Email</th>
                  <th className="uppercase text-white font-medium">Price</th>
                  <th className="uppercase text-white font-medium">
                    Transaction Id
                  </th>
                  <th className="uppercase text-white font-medium">Date</th>
                  <th className="uppercase text-white font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {payments?.map((payment, index) => (
                  <tr>
                    <th>{index + 1}</th>

                    <td>{payment.email}</td>
                    <th>${payment?.price}</th>
                    <td>{payment.transactionId}</td>
                    <td>{payment?.date}</td>
                    <td>{payment?.status}</td>
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

export default PaymentHistory;
