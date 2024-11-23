const { Schema, model, Types } = require("mongoose");

const SquadSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: "User", required: true },
    selectedPlayer: [{ type: Types.ObjectId, ref: "Player", required: true }],
  },
  { timestamps: true }
);

const Squad = model("Squad", SquadSchema);

module.exports = Squad;
