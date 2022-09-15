import express from 'express';
import * as controller from '../controllers/plane.controller.js'
import { testMiddleware } from '../middlewares/middleware.js';

const router = express.Router();

router.get("/all", controller.getAllPlane)

/* example
router.get("/:id", controller????)
router.post("/", controller.????))
router.patch("/:id", testMiddleware, controller.????))
router.delete("/plane/blibli/:id", controller.????)
*/

export { router as orderRouter } 