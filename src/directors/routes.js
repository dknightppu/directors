const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getDirectors);
router.post('/', controller.createDirectors);
router.put('/:id', controller.updateDirectors);

module.exports = router;
