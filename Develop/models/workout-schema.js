const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    workout: [
        {
            lastActiveAt: Date(),
            exercises: [
                {
                    type: String,
                    name: String,
                    duration: Number,
                    weight: Number,
                    reps: Number,
                    sets: Number,
                }
            ]
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;