import express from "express";
import {verifyAdmin} from "../utils/verifyTokens.js";
import { createRoom, deleteRoom,updateRoom, getRoom,getAllRoom,updateRoomAvailability  } from "../controllers/room.js";
const router = express.Router(); 
//CREATE
router.post("/:hotelId",verifyAdmin,createRoom) ;

//UPDATE
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id",updateRoomAvailability);
//delete
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);    
//GETALL
router.get("/", getAllRoom );
export default router;
