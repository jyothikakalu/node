const express = require("express")
const { getStudent, studentSignup, studentLogin} = require("../Controllers/StudentController.js")

const studentRouter=express.Router()


studentRouter.get("/:token",getStudent)

studentRouter.post("/signup",studentSignup)

studentRouter.post("/login",studentLogin)



module.exports = studentRouter