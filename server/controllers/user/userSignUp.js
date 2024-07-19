const bcrypt = require("bcrypt");
const userModel = require("../../models/userModel");

async function userSignUpController(req, res) {
  try {
    const { email, password, name } = req.body;

    if (!name || !email || !password) {
      throw new Error("All fileds are required");
    }

    //* check if user exists
    const user = await userModel.findOne({ email });

    if (user) {
      throw new Error("Already user exits.");
    }

    //* hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if (!hashPassword) {
      throw new Error("Something is wrong");
    }

    const payload = {
      ...req.body,
      role: "GENERAL",
      password: hashPassword,
    };

    const userData = new userModel(payload);
    const saveUser = await userData.save();

    res.status(201).json({
      data: saveUser,
      success: true,
      error: false,
      message: "User created Successfully!",
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userSignUpController;
