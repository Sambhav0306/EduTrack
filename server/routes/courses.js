import express from 'express';
import * as coursesController from '../controllers/courses.js';

const router = express.Router();

router.get('/dsa', coursesController.getDSA);

router.get('/os', coursesController.getOS);

router.get('/cn', coursesController.getCN);

router.get('/dbms', coursesController.getSWE);

router.get('/swe', coursesController.getSWE);

export default router;
