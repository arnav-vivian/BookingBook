import express from "express";
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel,countByCity,countByType,getHotelRooms } from "../controllers/hotel.js";
import {verifyAdmin} from "../utils/verifyTokens.js";
import createError from "../utils/error.js";
const router = express.Router(); 
//CREATE
router.post("/",verifyAdmin,createHotel) ;

//UPDATE
router.put("/:id",verifyAdmin,updateHotel);
//delete
router.delete("/find/:id",verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GETALL
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);

router.get("/countByType", countByType);


router.get("/rooms/:id", getHotelRooms);
export default router;