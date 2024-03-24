import express from "express";
import logger from "morgan";
import reservationsRoutes from "./routes/reservation-routes.js";
import cors from "cors";

const PORT = 8000;
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use("/reservation", reservationsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});