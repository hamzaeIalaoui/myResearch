// funderRoutes.js

const express = require('express');
const router = express.Router();
const funderController = require('../controllers/funderController');

router.get('/', funderController.getAllFunders);
router.get('/:id', funderController.getFunderById);
router.post('/', funderController.createFunder);
router.put('/:id', funderController.updateFunder);
router.delete('/:id', funderController.deleteFunder);

module.exports = router;
