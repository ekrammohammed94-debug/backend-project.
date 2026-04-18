const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

// routes
app.use("/api/patients", require("./routes/patientRoutes"));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
