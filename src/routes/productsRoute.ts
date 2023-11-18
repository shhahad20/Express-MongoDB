import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/productsController";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
