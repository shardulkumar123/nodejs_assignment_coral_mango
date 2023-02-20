import { Request, Response } from "express";
import { RestaurantData } from "../models/restauranSchema";

export interface IRestaurant {
  name: string;
  desc: string;
  address: string;
  pincode: number;
  total_reviews: any;
  menu: string;
  slug: string;
}

const Restaurants = {
  Restaurant: async (req: Request, res: Response): Promise<any> => {
    const bodyData: IRestaurant = req.body;
    // console.log('bodyData', bodyData)
    try {
      const checkResturant = await RestaurantData.findOne({
        name: bodyData.name,
      });

      // console.log('checkResturant', checkResturant)

      if(!checkResturant){
        const data = new RestaurantData({
          name: bodyData.name,
          desc: bodyData.desc,
          address: bodyData.address,
          pincode: bodyData.pincode,
          total_reviews: bodyData.total_reviews,
          menu: bodyData.menu,
          slug: bodyData.slug
        });
        // console.log('data', data)
        const createRestaurant = await data.save()
        // console.log('createResturant', createRestaurant)
        return res.status(201).send({
          success: true,
          message: "Resturant is created successfully",
          createRestaurant
        })
      }        
      else {
        return res
          .status(404)
          .send({ error: true, message: "resturant is already exist in database" });
      }
    } catch (error) {
      res.status(404).send({ error: true, message: error,  });
    }
  },

  AllRestaurant: async (req: Request, res: Response): Promise<any> => {
    try {
      const getAllRestaurant = await RestaurantData.find();
      res.status(200).send({ success: true, getAllRestaurant });
    } catch (error) {
      res.status(404).send({ error: true, message: `Something went wrong ${error}` });
    }
  },

  // UpdateReview: async (req: Request, res: Response): Promise<any> => {
  //   const bodyData: IRestaurant = req.body;
  //   try {
  //     const checkResturant = await RestaurantData.findOne({
  //       // name: req.params.name,
  //       // _id: "63f0a96bc4315dd5578b27e1",
  //       slug: req.params.slug,
  //     });
      
  //     console.log('checkResturant', checkResturant)

  //     if(checkResturant){
  //       // const data = RestaurantData()
  //       // console.log('data', data)
  //     //  const review = bodyData.total_reviews

  //     // const updateRestReview = await RestaurantData.total_reviews.concat({review})
  //       // await updateRestReview.save()
  //       const updateRestReview = await RestaurantData.updateOne(
  //         {slug: req.params.slug},//for filter
  //         {$set: {total_reviews : bodyData.total_reviews}},//upadted
  //         // {upsert: true}
  //         )
  //       console.log('updatedRestReview', updateRestReview)
  //       res.status(200).send({success: true, message:`review added ${updateRestReview}`})
  //     }
  //     // const getAllRestaurant = await RestaurantData.findById({});
  //     // res.status(200).send({ success: true, getAllRestaurant });
  //   } catch (error) {
  //     res.status(404).send({ error: true, message: `Something went wrong ${error}` });
  //   }
  // }, 
};

export default Restaurants;
