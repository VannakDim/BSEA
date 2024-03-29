const db = require ("../db.js")
const bcrypt = require ("bcryptjs")
const jwt = require ("jsonwebtoken");


const register = (req, res) =>{
    const q = "SELECT * FROM users WHERE username = ? OR email = ?"
    db.query(q,[req.body.username,req.body.email], (err, data) => {
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exist!")

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const q = "INSERT INTO users(`username`,`name`,`email`,`password`,`role`) VALUES (?)"
        const values = [req.body.username, req.body.name, req.body.email, hash, "pending"]

        db.query(q,[values], (err, data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("User has been created.")
        })
    })
}

const login = (req,res) => {
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length ===0) return res.status(404).json("User not found!")

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password)

        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!")

        const token = jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other} = data[0];

        res.cookie("access_token", token, {httpOnly: true})
        .status(200)
        .json(other);
    });

}

const logout = (req,res) =>{
    res.clearCookie("access_token",{
        sameSite: "none",
        secure: true
    }).status(200).json("User has been logged out.")
}

module.exports = {register, login, logout};