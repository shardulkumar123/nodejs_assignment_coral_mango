import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FoodImage from "../../public/images/food.jpg"


export default function Home({data}:any) {
  return (
    <div>
      <Head>
        <title>QuickFoodOrder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar/>
        <h1 className='text-2xl text-center py-8 bg-blue-200 w-full'>Welcome To QuickFood!</h1>
        <div className='grid p-2 grid-flow-col gap-6'>
         {data.getAllRestaurant.map((e:any, index:any)=>(
          <div key={index} className=" max-w-sm bg-red-400 border rounded-xl shadow">
          <a href="#">
              <Image className="rounded-t-lg" width={500} height={200} src={FoodImage}
               alt="" />
          </a>
          <div className="p-5">
              <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Address: </strong> {e.address}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Pincode:</strong> {e.pincode}</p>
              <Link href={`/resturant/${e.slug}` }className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  more details
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
          </div>
      </div>
         ))}
        </div>
        <Footer/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context:any) {
  const res = await fetch(`http://localhost:8000/resturant`)
  const data = await res.json()
  return { props: { data } }
}
