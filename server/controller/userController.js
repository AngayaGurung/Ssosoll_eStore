const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegistration = async (req, res, next) => {
  try {
    const { name, address, contact, role, email, password } = req.body;

    if (password.length < 6 || password.length > 20) {
      return res.status(400).send({
        success: false,
        message: "Password Length Must Be Between 6 To 20",
      });
    }

    const checkUser = await User.findOne({
      where: { email },
    });

    if (!checkUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        name,
        address,
        contact,
        role,
        email,
        password: hashedPassword,
      });
      res
        .status(200)
        .send({ success: true, message: "User Registered Successfully" });
    } else {
      res.status(200).send({ success: false, message: "User Already Exist" });
    }
  } catch (error) {
    next(error);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkEmail = await User.findOne({
      attributes: [
        "id",
        "role",
        "password",
        "name",
        "address",
        "contact",
        "email",
      ],
      where: { email },
    });

    const { id, role, name, address, contact, email: userEmail } = checkEmail;

    if (!checkEmail) {
      res.status(200).send({ message: "Email Not Found" });
    } else {
      const hashedPassword = checkEmail?.password;

      const verifyPassword = await bcrypt.compare(password, hashedPassword);

      if (!verifyPassword) {
        res
          .status(200)
          .send({ success: false, message: "Invalid Password Or Email" });
      } else {
        const jwtToken = jwt.sign(
          { id: checkEmail?.id },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.cookie("ssolsoll_cookie", jwtToken, {
          maxAge: "900000",
          // httpOnly: true,
        });

        let checkRole = checkEmail?.role === "Customer" ? "Customer" : "Role";

        res.status(200).send({
          success: true,
          data: { id, name, address, contact, email, role, email },
          role: checkRole,
          message: "Logged In Successful",
        });
      }
    }
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};
module.exports = { userRegistration, userLogin };
