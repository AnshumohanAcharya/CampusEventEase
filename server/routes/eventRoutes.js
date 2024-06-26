import express from "express";
import {
  getUnApprovedEvents,
  deleteEvent,
  togglePublish,
  approveEvent,
  getPublishedEvents,
  getApprovedEvents,
  sendCertificate,
  getCommitteeUnApprovedEvents,
  getCommitteeApprovedEvents,
  getEvent,
  createEvent,
} from "../controllers/eventController.js";
import { checkRole } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/createEvents", checkRole(["convenor","member"]), createEvent);
router.get("/unapprovedEvents", checkRole(["admin"]), getUnApprovedEvents);
router.post(
  "/committeeUnapprovedEvents",
  checkRole(["convenor", "member"]),
  getCommitteeUnApprovedEvents
);
router.get("/approvedEvents", checkRole(["admin"]), getApprovedEvents);
router.post("/getEvent", getEvent);
router.post(
  "/committeeApprovedEvents",
  checkRole(["convenor", "member"]),
  getCommitteeApprovedEvents
);
router.post("/approveEvent", checkRole(["admin"]), approveEvent);
router.get("/publishedEvents", getPublishedEvents);
router.post("/togglePublish", checkRole(["admin"]), togglePublish);
router.post("/deleteEvent", checkRole(["admin"]), deleteEvent);
router.post(
  "/sendCertificate",
  checkRole(["admin", "member", "convenor"]),
  sendCertificate
);

export default router;
