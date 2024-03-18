import { DashboardInsight } from "../models/dashboardModel.js";

// demo purpose
export const createInsight = async (req, res) => {
  await DashboardInsight.create({
    end_year: "",
    intensity: 6,
    sector: "Energy",
    topic: "gas",
    insight: "Annual Energy Outlook",
    url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    region: "Northern America",
    start_year: "",
    impact: "",
    added: "January, 20 2017 03:51:25",
    published: "January, 09 2017 00:00:00",
    country: "United States of America",
    relevance: 2,
    pestle: "Industries",
    source: "EIA",
    title:
      "U.S. natural gas consumption is expected to increase during much of the projection period.",
    likelihood: 3,
  });
  res.status(200).json({
    success: true,
    message: "Created",
  });
};

export const statisticsData = async (req, res) => {
  try {
    // Fetch only the intensity field from MongoDB
    const data = await DashboardInsight.find().limit(20);

    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data,
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(400).json({
      success: false,
      message: "Error in fetching data",
    });
  }
};

export const getTopicsSectorsCtrl = async () => {
  try {
    const insights = await InsightModel.find(
      {},
      { _id: 0, sector: 1, topic: 1 }
    );
    const sectors = insights.map((insight) => insight.sector);
    const uniqueSectors = [...new Set(sectors)];
    const topics = insights.map((insight) => insight.topic);
    const uniqueTopics = [...new Set(topics)];

    res.status(200).json({
      success: true,
      message: "Topics and sectors fetched",
      sectors: uniqueSectors,
      topics: uniqueTopics,
    });
  } catch (error) {
    console.error("Error fetching sectors and topics", error);
    res.status(400).json({
      success: false,
      message: "Error in topics and sectors data",
    });
  }
};

// fetching countries from db
export const getContriesCtrl = async (req, res) => {
  try {
    const insights = await DashboardInsight.find({}, { _id: 0, country: 1 });
    const countries = insights.map((insight) => insight.country);
    const uniqueCountries = [...new Set(countries)];

    res.status(200).json({
      success: true,
      message: "All countries fetched",
      uniqueCountries,
    });
  } catch (error) {
    console.error("Error fetching countries ", error);
    res.status(400).json({
      success: false,
      message: "Error in fetching countries",
    });
  }
};

export const getCitiesCtrl = async () => {
  try {
    const insights = await InsightModel.find({}, { _id: 0, city: 1 });
    const cities = insights.map((insight) => insight.city);
    const uniqueCities = [...new Set(cities)];
    res.status(200).json({
      success: true,
      message: "All countries fetched",
      uniqueCities,
    });
  } catch (error) {
    console.error("Error fetching cities ", error);
    res.status(400).json({
      success: false,
      message: "Error in fetching cities",
    });
  }
};

export const getRegionsCtrl = async () => {
  try {
    const insights = await InsightModel.find({}, { _id: 0, region: 1 });
    const regions = insights.map((insight) => insight.region);
    const uniqueRegions = [...new Set(regions)];

    res.status(200).json({
      success: true,
      message: "All countries fetched",
      uniqueRegions,
    });
  } catch (error) {
    console.error("Error fetching regions ", error);
    res.status(400).json({
      success: false,
      message: "Error in fetching regions",
    });
  }
};
