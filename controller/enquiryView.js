import enquiryModels from "../models/enquiryModels.js";

const userView = async (req, res) => {
  try {
    const checkEnquiry = await enquiryModels.find();
    if (checkEnquiry.length === 0) {
      return res.status(404).json({
        status: 0,
        Message: "Enquiry List is Empty",
      });
    }

    return res.status(200).json({
      status: 1,
      Message: "Student Enquiry List",
      checkEnquiry,
    });
  } catch (error) {
    return res.status(500).json({
      status: 0,
      Message: "Server Error",
      error,
    });
  }
};

export default userView;
