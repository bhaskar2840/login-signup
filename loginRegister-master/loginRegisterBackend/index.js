import express from "express"
import cors from "cors"
import mongoose from "mongoose"
const userRoutes = require("./userRoutes");

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

app.use(express.json());
  app.use("/auth", userRoutes);

  app.listen(3000, () => console.log("Running on port 3000"));

