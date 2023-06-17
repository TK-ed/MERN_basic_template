import User from "../models/userModel.js";

const createUser = async (req, res) => {
  const { name, mail, password } = req.body;

  try {
    const exists = await User.findOne({ mail });
    if (exists) {
      return res.status(400).send({ message: "User already exists" });
    }
    const user = new User({
      name,
      mail,
      password,
    });

    user.save();
    res.status(201).send(user);
  } catch (err) {
    res.send(err);
  }
};

export default createUser;
