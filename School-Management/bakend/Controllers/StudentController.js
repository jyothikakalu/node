const bcrypt = require("bcrypt")
const studentModel = require("../model/Studentmodel")
const jwt = require("jsonwebtoken")


//token generation
const generateToken = (id) => {
    let studentId = id.toString()
    let token = jwt.sign(studentId, "vicky")
    return token

}

const getStudent = async (req, res) => {
    // res.send("api is working")
    // console.log(req.params)
    let { token } = req.params
    let id = jwt.verify(token, "vicky")
    let studentDetails = await studentModel.findOne({ _id: id }).select("-password -_id -__v")
    res.send(studentDetails)
    // res.send(id)
}
const studentSignup = async (req, res) => {
    let data = req.body
    let { fname, lname, password, email, sId, mobile } = data
    if (!fname || !lname || !password || !email || !sId || !mobile) {
        return res.status(400).send("Provide all required fields")
    }
    let isEmailAvailable = await studentModel.findOne({ email })
    if (isEmailAvailable) {
        return res.status(401).send("student already registerd")
    }
    else {
        let hashespass = await bcrypt.hash(password, 10)
        let student = { ...data, password: hashespass }
        let studentUpload = new studentModel(student)
        await studentUpload.save()
        return res.status(201).send({ token: generateToken(studentUpload._id) })
    }
}

const studentLogin = async (req, res) => {
    let { password, email } = req.body
    let student = await studentModel.findOne({ email })
    if (student) {
        let matchedPass = await bcrypt.compare(password, student.password)
        if (matchedPass) {
            res.status(200).send({ token: generateToken(student.password) })
        }
        else{
            res.status(400).send("password is not  matched" )
        }

    }
    else {
        res.status(404).send("Student is not registeres")
    }
}


module.exports = { getStudent, studentSignup,studentLogin }
