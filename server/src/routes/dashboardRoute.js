import express from "express";
import {
  createInsight,
  statisticsData,
  getTopicsSectorsCtrl,
  getContriesCtrl,
  getCitiesCtrl,
  getRegionsCtrl,
} from "../controllers/dashboardCtrl.js";

const router = express.Router();

// router.get("/create", createInsight);
router.get("/get-data", statisticsData);
router.get("get-topics-sectors", getTopicsSectorsCtrl);
router.get("/get-countries", getContriesCtrl);
router.get("/get-cities", getCitiesCtrl);
router.get("/get-regions", getRegionsCtrl);

export default router;
