import enquiryModels from "../models/enquiryModels.js";

const userDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUser = await enquiryModels.findOne({ _id: id });
    if (!checkUser) {
      return res.status(404).json({
        status: 0,
        Message: "User Not Exist",
      });
    }
    const deleteUser = await enquiryModels.deleteOne({ _id: id });
    return res.status(200).json({
      STatus: 1,
      Message: "Enquiry Deleted",
      deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      status:0,
      Message: "Server Error",
      error,
    });
  }
};

export default userDelete;
