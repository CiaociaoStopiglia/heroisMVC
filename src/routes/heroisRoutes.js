import express from 'express';
import { getAllHerois, getHeroiById } from '../controllers/heroisController.js';

const router = express.Router();

router.get("/", getAllHerois);


router.get("/", getAllHerois);
router.get("/:id", getHeroiById);

export default router;