const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    lastName: {
      type: String,
      required: [true, "Le nom de famille est requis"]
    },
    firstName: {
      type: String,
      required: [true, "Le prénom est requis"]
    },
    adresse: {
      type: String,
      required: [true, "adresse est requis"]
    },
    phone: {
      type: String,
      required: [true, "Le téléphone est requis"],
      unique: true,
      // validate: {
      //   validator: function (v) {
      //     // 📌 Numéro suisse : +41XXXXXXXXX ou 0XXXXXXXXX
      //     return /^(\+41|0)([1-9]{1}[0-9]{8})$/.test(v);
      //   },
      //   message: props => `${props.value} n'est pas un numéro suisse valide`
      // }
    },

  },
  {
    timestamps: true,
    collection: 'users' // Nom de collection explicite
  }
);

// Middleware pour debug
UserSchema.pre('save', function (next) {
  console.log('💾 Tentative de sauvegarde utilisateur:', this.toObject());
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;