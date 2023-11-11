// assignedRoutes.js

const express = require('express');
const router = express.Router();
const assignedController = require('../controllers/assignedController');

router.get('/', assignedController.getAllAssigned);
router.get('/:id', assignedController.getAssignedById);
router.post('/', assignedController.createAssigned);
router.put('/:id', assignedController.updateAssigned);
router.delete('/:id', assignedController.deleteAssigned);

module.exports = router;
