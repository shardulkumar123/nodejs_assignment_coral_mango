import { Schema, model, Types } from "mongoose";

interface IData {
  review: string,
  resturant: any
    
}

const RestaurantReviewSchema = new Schema<IData>(
  {
    review: {
      type: String,
      required: true,
    },
    resturant:[{
      type: Schema.Types.ObjectId,
      ref:'Resturant',
      required: true
    }]
  },
  { versionKey: false }
);

export const RestaurantReviewData: any = model<IData>("ResturantReview", RestaurantReviewSchema);
