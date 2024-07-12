const { mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

const userRoutes = require("./routers/userRouter.js")
const articleRoutes = require("./routers/articleRouter.js");
const authRoutes = require("./routers/authRouter.js");


dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/article", articleRoutes);


mongoose.connect(process.env.DATABASE_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log("Running on port " + PORT);
        console.log('Connecting');
    });
})
.catch((err) => {
    console.log(err);
});