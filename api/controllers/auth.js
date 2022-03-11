const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


exports.inscrire = (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    newUser.save().then((savedUser) => {
        res.status(201).json(savedUser);
    }).catch((err) => res.status(500).json(err))
}


exports.connexion = (req, res) => {

    User.findOne({email: req.body.email}).then((user) => {

        !user && res.status(401).json("Wrong credentials!");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        user.password !== req.body.password && res.status(401).json("Wrong credentials!");

        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin,
        }, process.env.JWT_SEC, {expiresIn: "3d"});
        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});

    }).catch((err) => res.status(500).json(err))
}