import { Schema, model } from "mongoose";
import validator from "validator";

interface IUser {
  username: string;
  email: string;
  password: string;
  token: string;
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate(val: any) {
        if (!validator.isEmail(val)) throw new Error("Invalid Email");
      },
    },
    password: {
      type: String,
      required: true,
    }
  },
  { versionKey: false }
);

export const UserSignUpData:any = model<IUser>("Users", UserSchema);
