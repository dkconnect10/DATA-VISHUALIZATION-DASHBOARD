import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  end_year: { type: String, default: "" },
  intensity: { type: Number, required: true },
  sector: { type: String, default: "" },
  topic: { type: String, default: "" },
  insight: { type: String, default: "" },
  url: { type: String, default: "" },
  region: { type: String, default: "" },
  start_year: { type: String, default: "" },
  impact: { type: String, default: "" },
  added: { type: String, default: "" },
  published: { type: String, default: "" },
  country: { type: String, default: "" },
  relevance: { type: Number, required: true },
  pestle: { type: String, default: "" },
  source: { type: String, default: "" },
  title: { type: String, default: "" },
  likelihood: { type: Number, required: true },
});

const Data = mongoose.model("Data", dataSchema, "visualization");

export default Data;
