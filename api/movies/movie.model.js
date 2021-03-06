const { Schema, model } = require("mongoose");

const MovieSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true
    },
    actors: [
      {
        ref: "Actor",
        type: Schema.Types.ObjectId
      }
    ],
    enable: {
      type: Boolean,
      default: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = model("Movie", MovieSchema);
