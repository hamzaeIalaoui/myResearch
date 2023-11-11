// appliesRoutes.js

const express = require('express');
const router = express.Router();
const appliesController = require('../controllers/appliesController');

router.get('/', appliesController.getAllApplications);
router.get('/:id', appliesController.getApplicationById);
router.post('/', appliesController.createApplication);
router.put('/:id', appliesController.updateApplication);
router.delete('/:id', appliesController.deleteApplication);

module.exports = router;
