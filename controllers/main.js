const { BadRequestError } = require("../errors")
const jwt = require("jsonwebtoken")

const login = async (req, res) => {
    // check username, password in post(login) request
    // if exist create new JWT
    // send back to fron-end
    // setup authentication so only the request with JWT can access the dasboard

    const { username, password } = req.body
    console.log(username,password)

    if(!username || !password){
        throw new BadRequestError("please provide username and password") //400 is for bed request
    }
    //just for demo, normally provided by DB!!!!
    const id = new Date().getDate();

    // try to keep payload small, better experience for user
    // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: "30d"})
    res.status(200).json({msg:"user registered", token})
}

const dashboard = async (req, res) => {
    // console.log(
    const luckyno = Math.floor(Math.random() * 100)

    res.status(200).json({ msg: `hello ${req.user.username}`, secret: `number is ${luckyno}` })
    
}

module.exports = { login, dashboard }