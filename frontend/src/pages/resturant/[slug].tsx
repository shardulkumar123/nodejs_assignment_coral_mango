import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodImage from "public/images/food.jpg";



type FormData = {
  review: string;
};


const ResturantDetails = ({ data }: any) => {
  const [myData, setmyData] = useState<any>([]);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const result = data.getAllRestaurant.filter((e: any, index: any) => {
      return e.slug == slug;
    });
    const effectData: any = [...result];
    setmyData(effectData);
  }, [data.getAllRestaurant, slug]);



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  
  const onSubmit = handleSubmit( async (data) => {
    console.log('data', data)
    // if (data) {
    //   // console.log(data)
    //   const res = await fetch("http://localhost:8000/admin-login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   console.log('res', res)
    //  
    // }
  });



  return (
    <div className="bg-slate-500">
      <Navbar />
      <div className="p-5">
        <div className="text-center py-5 text-6xl">{myData[0]?.name}</div>
        <div className="text-center text-lg font-bold uppercase"><span className="font-bold capitalize">Location :</span>  {myData[0]?.address}</div>
        <div className="p-5 text-center">{myData[0]?.desc}</div>
        <div><span className="font-bold">Pincode :</span> {myData[0]?.pincode}</div>
        <div className="">
          <p className="font-bold">Menu : </p>
          {myData[0]?.menu.map((e: any, index: any) => {
            return <li key={index}>{e}</li>;
          })}
        </div>
      </div>
      <div className="mt-24">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-4 border rounded-lg bg-gray-400">
            <div className="px-4 py-2 rounded-t-lg bg-gray-800">
              <textarea
                id="comment"
                rows={4}
                className="w-full px-0 text-sm  bg-gray-800 focus:ring-0 text-gray-400 placeholder-gray-400"
                placeholder="Write a review..."
                {...register('review')}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2  border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Post Review
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};
export default ResturantDetails;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/resturant`);
  const data = await res.json();

  return { props: { data } };
}
