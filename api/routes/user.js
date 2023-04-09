import express from "express";
import { deleteUser, getAllUser, getUser, updateUser} from "../controllers/user.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyTokens.js";

const router = express.Router();
// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("you are logged in")
// }    );

// router.get("/checkuser/:id",verifyUser,(req,res)=>{res.send("hello user, you are logged in and can delete your account")
// }    );

// router.get("/checkadmin/:id",verifyAdmin,(req,res)=>{res.send("hello Admin, you are logged in and can delete all account")
// }    );
//UPDATE
router.put("/:id",verifyUser,updateUser);
//delete
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GETALL
router.get("/",verifyAdmin, getAllUser);
export default router;