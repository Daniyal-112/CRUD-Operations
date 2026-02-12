const checkToken = (req, res, next) => {
  if (req.query.token == undefined || req.query.token == null) {
    return res.status(400).json({
      status: 0,
      Message: "Please Enter Token",
    });
  } else if (req.query.token != process.env.myToken) {
    return res.status(401).json({
      status: 0,
      Message: "Please Enter Correct Token",
    });
  }
  next();
};

export default checkToken;
