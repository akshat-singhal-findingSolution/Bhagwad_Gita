const User = require("../../model/User");
const bcrypt = require("bcryptjs");
const { AppErr, appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");

// register

const registerUserCtrl = async (req, res, next) => {
  const { fullName, email, password } = req.body;
  console.log(fullName, email, password);
  try {
    // check if email exist
    const userFound = await User.findOne({ email });

    if (userFound) {
      return next(new AppErr("User Already Exist", 400));
    }
    // check if fields are empty
    if (!email || !fullName || !password) {
      return res.json({
        message: "Please provide all fields",
      });
    }
    // hash password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    res.json({
      status: "success",
      fullName: user.fullName,
      email: user.email,
      id: user._id,
      msg: "Register Route",
    });
  } catch (error) {
    // res.json(err);
    next(new AppErr(error.message, 500));
  }
};

// login
const userLoginCtrl = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // check if email exist

    const userFound = await User.findOne({ email });

    if (!userFound) {
      return next(appErr("Invalid Login Credentials", 400));
    }

    // check for password validity

    const isPasswordMatch = await bcrypt.compare(password, userFound.password);

    if (!isPasswordMatch) {
      return next(appErr("Invalid Login Credentials", 400));
    }

    res.json({
      status: "success",
      fullName: userFound.fullName,
      id: userFound._id,
      msg: "Login Route",
      token: generateToken(userFound._id),
    });
  } catch (error) {
    // res.json(err);
    next(new AppErr(error.message, 500));
  }
};

const userProfileCtrl = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    res.json(user);
  } catch (error) {
    next(new AppErr(error.message, 500));
  }
};
module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
};
