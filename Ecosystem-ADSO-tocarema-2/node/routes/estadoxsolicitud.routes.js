import { Router } from "express";
import {
  getAll,
  getOne,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/estadoxsolicitud.controller.js";

const router = Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
