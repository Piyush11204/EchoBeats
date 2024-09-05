const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define your schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});


// Password comparison method
userSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// Check if the model exists before defining it again
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
