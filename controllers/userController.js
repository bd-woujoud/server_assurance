
const User = require("../Models/userModel.js");


const registerUser = async (req, res) => {

  const {
    lastName,
    firstName,
    phone,
    adresse,
  } = req.body;

  const newUser = await User.create({
    lastName,
    firstName,
    phone,
    adresse
  });

  res.status(201).json({

    lastName: newUser.lastName,
    firstName: newUser.firstName,
    phone: newUser.phone,
    adresse: newUser.adresse


  });

}
module.exports = {
  registerUser
};

