import mongoose, { Schema, model, Types } from "mongoose";

interface IData {
  name: string;
  desc: string;
  address: string;
  slug: string;
  total_reviews: any;
  menu: any;
  pincode: number;
}

const RestaurantSchema = new Schema<IData>(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    total_reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "ResturantReview",
      },
    ],
    menu: { type: Array, default: [] },
  },
  { versionKey: false }

);

export const RestaurantData: any = model<IData>("Resturant", RestaurantSchema);
