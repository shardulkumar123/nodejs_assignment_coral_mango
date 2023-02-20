import { Schema, model, Types } from "mongoose";

interface IData {
  review: string,
  name: string
    
}

const RestaurantReviewSchema = new Schema<IData>(
  {
    review: {
      type: String,
      required: true,
    },
    name: String
  },
  { versionKey: false }
);

export const RestaurantReviewData: any = model<IData>("ResturantReview", RestaurantReviewSchema);
