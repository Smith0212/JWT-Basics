const { UnauthenticatedError } = require("../errors")  //"UnauthenticatedError" this is the same name as we export
const jwt = require("jsonwebtoken")


const authenticationMW = (req, res, next) => {

    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new UnauthenticatedError("No token provied") // 401 is for authentication error
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {username, id} = decoded
        req.user = {username, id}      //"req.user" it is use to store the user data
        next()                         // once the authentication is complete it will pass to next midwaer(dashboard)
        // console.log(decoded)
    }
    catch (error) {
        throw new UnauthenticatedError("Not authorized to access this route")   //for error like token is expire or not correct
    }
}


module.exports = authenticationMW