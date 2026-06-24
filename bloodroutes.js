const express = require("express");
const router = express.Router();
const Blood = require("../models/blood");

// Get all donors
router.get("/", async (req, res) => {
    try {
        const donors = await Blood.find();
        res.status(200).json(donors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get donor by ID
router.get("/:id", async (req, res) => {
    try {
        const donor = await Blood.findById(req.params.id);

        if (!donor) {
            return res.status(404).json({
                message: "Donor not found"
            });
        }

        res.status(200).json(donor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add donor
router.post("/", async (req, res) => {
    try {
        const donor = new Blood(req.body);
        const savedDonor = await donor.save();

        res.status(201).json(savedDonor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update donor
router.put("/:id", async (req, res) => {
    try {
        const updatedDonor = await Blood.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedDonor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete donor
router.delete("/:id", async (req, res) => {
    try {
        await Blood.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Donor deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;