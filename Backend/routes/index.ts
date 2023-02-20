import express from "express";
import AdminUser from "../controller/admin";
import Restaurant from "../controller/restaurant";
import RestarurantReview from "../controller/review"

const router = express.Router();

router.post("/signup", AdminUser.AdminSignUp);
router.post("/login", AdminUser.AdminLogin);
router.post("/resturant", Restaurant.Restaurant);
router.get("/resturant", Restaurant.AllRestaurant);
router.post("/review", RestarurantReview.CreatedReview);
router.get("/review", RestarurantReview.getAllRevview);
router.get("/", async (req, res) => {
  res.status(200).send({ message: "Hello World!" });
});

export default router;
