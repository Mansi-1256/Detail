import express from 'express';

import { createdetail, getdetail } from '../Controller/detail.js';

const router = express.Router();

router.post('/', createdetail)
router.get('/', getdetail)

export default router;





