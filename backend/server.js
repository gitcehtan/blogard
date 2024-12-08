const express = require("express");
const app = express();
const blogRouter = require("./routes/blogRouter.js");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 3000;

app.use("/", blogRouter);


 
app.listen(PORT, ()=>{
    console.log(`Server ruuning on http://localhost:3000`);
}) 