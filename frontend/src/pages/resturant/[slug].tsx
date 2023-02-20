import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormData = {
  review: string;
  // restname : string
};

const ResturantDetails = ({ data }: any) => {
  const [myData, setmyData] = useState<any>([]);
  const [isHide, setIsHide] = useState(true);
  const [defaultPayload, setdefaultPayload] = useState("");
  console.log('defaultPayload', defaultPayload)
  console.log("myData", myData);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const result = data.getAllRestaurant.filter((e: any, index: any) => {
      return e.slug == slug;
    });
    const effectData: any = [...result];
    setmyData(effectData);
  }, [data.getAllRestaurant, slug]);

  useEffect(() => {
    setdefaultPayload(myData[0]?.name);
  }, [myData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log("data", data);
    const { review } = data;
    if (data) {
      // console.log(data)
      const res = await fetch("http://localhost:8000/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          review: review,
          name: defaultPayload,
        }),
      });
    }
  });

  return (
    <div className="bg-slate-500">
      <Navbar />
      <div className="p-5">
        <div className="text-center py-5 text-6xl">{myData[0]?.name}</div>
        <div className="text-center text-lg font-bold uppercase">
          <span className="font-bold capitalize">Location :</span>{" "}
          {myData[0]?.address}
        </div>
        <div className="p-5 text-center">{myData[0]?.desc}</div>
        <div>
          <span className="font-bold">Pincode :</span> {myData[0]?.pincode}
        </div>
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
                {...register("review")}
                required
              ></textarea>
              {/* {isHide &&<input
                id="restname"
                value={myData[0]?.name}
                {...register("restname")}
                required
              ></input>} */}
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

      <div className="my-12">
        <h1 className="text-lg px-5 font-bold">All Reviews :</h1>
        {myData[0]?.total_reviews.map((e: any, index: any) => (
          <div key={index} className="my-4 px-5 flex items-center gap-2">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-12 h-12 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            {e?.review}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default ResturantDetails;

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8000/resturant`);
  const data = await res.json();

  return { props: { data } };
}
