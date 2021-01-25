const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();


//
router.get("/:id" , (req, res) =>{
    let userId = req.params.id
    User.findById(userId)
    .then(userById =>{
        res.json(userById)
    })
    .catch((err) => res.json({msg: err}))
})

//pup
///sdasdas







//----------------------------------------
router.get("/", (req, res) => {
    User.find()
        .then((users) => {
            res.json({ msg: users });
        })
        .catch((err) => res.json({ msg: err }));
});


router.post(('/register'), (req, res) => {
    
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        // photo: req.file.filename
    };
    newUser.email = newUser.email.toLowerCase();
    User.findOne({ email: newUser.email })
        .then((user) => {
            // if the email in the database !
            if (user) {
                res.json({
                    msg: "the email was used change it plz ! ",
                });
            }
            // if the email is not insaid the database
            else {
                var salt = bcrypt.genSaltSync(10);
                newUser.password = bcrypt.hashSync(req.body.password, salt);
                newUser.email = newUser.email.toLowerCase();
                User.create(newUser).then((user) => {
                    res.json({ msg: "user hasbeen register", user: user });
                });
            }
        })
        .catch((err) => res.json({ msg: err }));
});

router.post("/login", async (req, res) => {
    let { email, password } = req.body;
    //  let email = req.body.email ; let password = req.body.password
    email = email.toLowerCase();
    const user = await User.findOne({ email: email }); // its same to =>  User.findOne({email:email}).then(user => { })
    // if email is  not exist
    if (!user) {
        res.json({ msg: "email is not exist" });
    }
    // if email is  exist
    else {
        // if password is currect
        if (bcrypt.compareSync(password, user.password)) {
            user.password = undefined;
            let payload = { user };
            let token = jwt.sign(payload, process.env.SECRET_KEY, {
                expiresIn: 1000 * 60 * 60,
            }); // to the user info
            res.json({ msg: "user login ", token });
        }
        // / if password is not currect
        else {
            res.json({ msg: "password is not currect" });
        }
    }
});

router.get("/:token", (req, res) => {
    let token = req.params.token;

    jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
        if (err) return res.json({ msg: err });

        let user = decode;

        res.json({ msg: "user decoded", user });
    });
});

router.post('/reset', (req, res) => {

    User.findOne({ email: req.body.email }, function (err, foundUser) {
        password = req.body.password; // req.body
        console.log(foundUser);
        bcrypt.genSalt((err, salt) => {
            // changes every time
            console.log("bcrypt salt:", salt);
            bcrypt.hash(password, salt, (err, passwordHash) => {
                console.log("password:", password);
                console.log("passwordHash:", passwordHash);
                User.updateOne({ email: req.body.email }, { password: passwordHash }, (err, newUser) => {

                    // res.redirect("/profile");
                    res.json({ msg: " password changed " });
                });
            });
        });
        if (!foundUser) {
            console.log('No user with email ' + req.body.email);
        }

    })

})


module.exports = router;