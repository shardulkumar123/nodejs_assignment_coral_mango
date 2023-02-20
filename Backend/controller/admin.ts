import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserSignUpData } from "../models/adminSchema";

export interface SignUp {
  username: string;
  email: string;
  password: string;
}

const AdminUser = {
  AdminSignUp: async (req: Request, res: Response): Promise<any> => {
    const userData: SignUp = req.body;
    try {
      // console.log("checking user");
      const checkUser = await UserSignUpData.findOne({
        email: userData.email,
      });
      // console.log("after checked user");

      if (!checkUser) {
        console.log("if user not found");
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const data = new UserSignUpData({
          username: userData.username,
          email: userData.email,
          password: hashedPassword,
        });
        // console.log("data", data);
        const createUser = await data.save();
        // console.log("created user", createUser);
        return res
          .status(201)
          .send({ success: true, message: "New Admin Created", createUser });
      } else {
        return res
          .status(404)
          .send({ error: true, message: "Admin Already Exists" });
      }
    } catch (error) {
      res.send(error);
    }
  },
  AdminLogin: async (
    req: Request,
    res: Response
  ): Promise<any> => {
    const userData: SignUp = req.body;
    try {
      const checkUser = await UserSignUpData.findOne({
        email: userData.email,
      });
      // console.log('checkUser', checkUser)
      if (checkUser) {
        const token = req.body.token = jwt.sign(
          { email: userData.email },
          `${process.env.SECRET_KEY}`,
          {
            expiresIn: "7d",
          }
        );
        // console.log(token)
        const checkPassword = await bcrypt.compare(
          userData.password,
          checkUser?.password
        );
        console.log('checkPassword', checkPassword)
        if (checkPassword) {
          res
            .status(200)
            .send({ success: "true", message: "user logged in ", token });
        } else {
          res.status(404).send({ error: true, message: "Invalid Credentials" });
        }
      } else {
        res.status(404).send({ error: true, message: "Admin Not Exits" });
      }
    } catch (error) {
      res.status(500).send({ error });
    }
  },
};
export default AdminUser;
