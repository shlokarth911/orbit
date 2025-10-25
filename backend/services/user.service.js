const userModel = require("../models/User");

module.exports.createUser = async ({ name, email, password, phoneNumber }) => {
  const user = await userModel.create({
    name,
    email,
    password,
    phoneNumber,
  });

  return user;
};
