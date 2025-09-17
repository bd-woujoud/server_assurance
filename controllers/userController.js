const User = require("../Models/userModel.js");

const registerUser = async (req, res) => {
  try {
    const { lastName, firstName, phone, adresse } = req.body;

    const newUser = await User.create({
      lastName,
      firstName,
      phone,
      adresse,
    });

    return res.status(201).json({
      lastName: newUser.lastName,
      firstName: newUser.firstName,
      phone: newUser.phone,
      adresse: newUser.adresse,
    });
  } catch (error) {


    console.error("❌ Erreur lors de l'inscription:", error);

    // Doublon (clé unique)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Ce numéro de téléphone existe déjà"
      });
    }

    // Validation mongoose
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors).map(err => err.message).join(", ")
      });
    }

    // Fallback (par défaut)
    return res.status(500).json({
      success: false,
      message: "Erreur interne du serveur"
    });
  }
};
const getUsers = async (req, res) => {
  try {


    const users = await User.find({})


    return res.status(201).json({
      users
    });
  } catch (error) {


    console.error("❌ Erreur lors de l'inscription:", error);

    return error

  }
};

module.exports = { registerUser, getUsers };
