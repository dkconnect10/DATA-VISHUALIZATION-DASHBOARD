import { Router } from "express";
import { getData, postData } from '../controllers/dataController.js';

const router = Router();

// GET request to retrieve data
router.route('/datas').get(getData);

// POST request to save new data
router.route('/datas').post(postData);

export default router;
