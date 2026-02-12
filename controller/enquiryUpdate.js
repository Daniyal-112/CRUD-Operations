import enquiryModels from "../models/enquiryModels.js";

const userUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const checkUser = await enquiryModels.findOne({ _id: id });
    if (!checkUser) {
      return res.status(404).json({
        status: 0,
        Message: "User Not Exist",
      });
    }
    const { Name, Phone, Email, Message } = req.body;
    const updateObj = {
      sName: Name,
      sPhone: Phone,
      sEmail: Email,
      sMessage: Message,
    };
    const updateRes = await enquiryModels.updateOne({ _id: id }, updateObj);
    return res.status(200).json({
      status: 1,
      Message: "Data Updated",
      updateRes,
    });
  } catch (error) {
    return res.status(500).json({
      status: 0,
      Message: "Server Error",
      error,
    });
  }
};

export default userUpdate;
