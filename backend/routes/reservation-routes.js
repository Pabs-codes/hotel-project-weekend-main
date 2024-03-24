import { Router } from "express";
import { addReservation, getAvailability } from "../controllers/reservation-controller.js";

const router = Router();

router.post("/", async (req, res) => {
    return await addReservation(req, res)
});

router.get("/availability", async (req, res) => {
    const params = req.query;
    return await getAvailability(params, res);
});

export default router;