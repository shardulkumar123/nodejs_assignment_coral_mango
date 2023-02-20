import React from "react";
// import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const adminpanel = ({ data }: any) => {
  // const router = useRouter();
  // const handlelog = () => {
  //   localStorage.removeItem("access_teoken");
  //   router.push("/");
  // };
  return (
    <div className="bg-blue-200  text-center h-full">
      <Navbar/>
      {/* <div className="relative"> */}
      <div className="my-5 text-xl">Welcome QuickFood Admin Dashboard!</div>
      {/* <button type='submit' className="py-2" onClick={handlelog}>Logout</button> */}
      {/* </div> */}
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs uppercase  bg-gray-700 text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Resturants
              </th>
              <th scope="col" className="px-6 py-3">
                Review
              </th>
            </tr>
          </thead>
          <tbody>
            {data.getAllRestaurant.map((e: any, index: any) => (
              <tr key={index} className="border-b bg-gray-800 border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap text-white"
                >
                  {index + 1}
                </th>
                <td className="px-6 py-4 text-white ">{e.name}</td>
                <td className="px-6 py-4">Laptop</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default adminpanel;

export async function getServerSideProps(context: any) {
  const res = await fetch(`http://localhost:8000/resturant`);
  const data = await res.json();
  return { props: { data } };
}
