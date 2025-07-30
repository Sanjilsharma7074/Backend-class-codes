const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // add 2 more fields - createdAt, updatedAt
  }
);

const Todo = mongoose.model("Todo",todoSchema);
module.exports = Todo;