import enquiryModels from "../models/enquiryModels.js";

const userInsert = async (req, res) => {
  try {
    const { Name, Email, Phone, Message } = req.body;
    if (!Name || !Email || !Phone || !Message) {
      return res.status(400).json({
        status: 0,
        Message: "Please Enter All Fields",
      });
    }
    const newUser = await enquiryModels.create({
      sName: Name,
      sEmail: Email,
      sPhone: Phone,
      sMessage: Message,
    });
    return res.status(201).json({
      status: 1,
      Message: "Data Inserted",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      status:0,
      Message: "Server Error",
      error,
    });
  }
};

export default userInsert;
