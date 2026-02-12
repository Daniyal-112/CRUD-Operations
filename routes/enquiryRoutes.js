import express from "express";
import userView from "../controller/enquiryView.js";
import userInsert from "../controller/enquiryInsert.js";
import userDelete from "../controller/enquiryDelete.js";
import userUpdate from "../controller/enquiryUpdate.js";
import checkToken from "../middleware/viewmiddleware.js";


const router = express.Router();

router.get("/enquiry-view",checkToken,userView);
router.post("/enquiry-insert",userInsert);
router.delete("/enquiry-delete/:id",userDelete)
router.put("/enquiry-update/:id",userUpdate)

export default router