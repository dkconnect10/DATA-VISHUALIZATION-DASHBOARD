import Data from "../models/dataModel.js";
import { asyncHandler } from "../util/asyncHandler.js";
import { ApiResponse } from "../util/ApiResponse.js";

// Retrieve data
const getData = asyncHandler(async (req, res) => {
  const query = {};

  if (req.query.end_year) query.end_year = req.query.end_year;
  if (req.query.topic) query.topic = req.query.topic;
  if (req.query.sector) query.sector = req.query.sector;
  if (req.query.region) query.region = req.query.region;
  if (req.query.pestle) query.pestle = req.query.pestle;
  if (req.query.source) query.source = req.query.source;
  if (req.query.swot) query.swot = req.query.swot;

  const data = await Data.find(query);
  res.status(200).json(new ApiResponse(200, data, "Filtered data retrieved successfully"));
});


// Save new data
const postData = asyncHandler(async (req, res) => {
  const newData = req.body; // Expect data in the request body
  const savedData = await Data.create(newData);
  res.status(201).json(new ApiResponse(201, savedData, "Data saved successfully"));
});

export { getData, postData };
