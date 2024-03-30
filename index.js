import "dotenv/config";
import express from "express";
import profesorRoute from "./routes/profesor.route.js";
import loginRoute from "./routes/login.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/profesores", profesorRoute)
app.use("/api/v1/login", loginRoute)

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log("Serve listening on port " + PORT);
});