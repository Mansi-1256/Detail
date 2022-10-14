import express from 'express';

import { createdetail, getdetail, deletedetail, updatedetail } from '../Controller/detail.js';

const router = express.Router();

router.post('/', createdetail)
router.get('/', getdetail)
router.delete('/:id', deletedetail)
router.patch('/:id', updatedetail)

export default router;





