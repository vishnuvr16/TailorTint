const addressModel = require("../../models/addressModel");

async function saveAddress(req, res) {
  try {
    const { name, address, phone, post, city, landmark } = req.body;
    const currentUser = req.userId;

    if (!name || !phone || !address || !post || !city) {
      throw new Error("Fill all details");
    }

    const newAddress = new addressModel({
      name,
      address,
      phone,
      post,
      city,
      landmark,
      userId: currentUser, // Associate the address with the user ID
    });
    const userAddress = await newAddress.save();

    return res.json({
      data: userAddress,
      message: "Address saved",
      success: true,
      error: false,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "An error occurred while saving the address.",
      error: err.message,
    });
  }
}

module.exports = saveAddress;
