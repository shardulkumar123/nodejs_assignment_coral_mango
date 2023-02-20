import { Request, Response } from "express";
import { RestaurantData } from "../models/restauranSchema";
import { RestaurantReviewData } from "../models/review";

export interface IRestaurantReview {
  review: string;
  name:any
}

const RestaurantReview = {
  CreatedReview: async (req: Request, res: Response): Promise<any> => {
    const bodyData: IRestaurantReview = req.body;
    try {
      const reviewData = new RestaurantReviewData({
        review : bodyData.review,
        name: bodyData.name
      })
      console.log('reviewData', reviewData)

      const createReview = await reviewData.save()
      // console.log('createReview', createReview)

      const searchResturant = await RestaurantData.findOne({
          name: bodyData.name,
        });
      // console.log('searchResturant', searchResturant)

      const pushingreview = searchResturant.total_reviews.push(reviewData)
      // console.log('pushingreview', pushingreview)

      const reviewpushed = await searchResturant.save();
      // console.log('CreatedReview', reviewpushed)

        res.status(201).send({success: true, message:`new review added`, data: createReview})
    } catch (error) {
      res.status(404).send({ error: true, message: `Something went wrong ${error}` });
    }
  }, 
  getAllRevview: async (req:Request, res:Response): Promise<any> =>{
    try{
      const getAllReview = await RestaurantReviewData.find()
      res.status(200).send({success: true,  getAllReview})
      
    }catch(err){
      res.status(404).send({error: true, message: `something went wrong / ${err} `})
    }
  }
};

export default RestaurantReview;
