import express from 'express'
import contactModel from "./ContectModel.js";

const router = express.Router()

//Contact
router.post("/contactus", async (req, res) => {
    try {
        const { name, email, message } = req.body
        if (!name || !email || !message) {
            return res.status(404).send({ message: "All Feilds Must  Be Filled." })
        }
        await new contactModel({ name, email, message }).save()
        res.status(201).send({
            success: true,
            message: "Thank You For Your Feedback."
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
});

export default router;