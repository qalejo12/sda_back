import "dotenv/config";
import express from "express";
import cors from "cors";
import teacherRoute from "./routes/teacher.route.js";
import loginRoute from "./routes/login.route.js";
import registerRoute from "./routes/register.route.js"
import userRoute from"./routes/user.route.js"
import subjectRoute from "./routes/subject.route.js"

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/teachers", teacherRoute)
app.use("/api/v1/login", loginRoute)
app.use("/api/v1/register", registerRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/subjects", subjectRoute)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log("Serve listening on port " + PORT);
});