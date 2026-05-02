const router = require('express').Router();
const { getResenasByCompa, createResena } = require('../controllers/resenasController');

router.get( '/compa/:id', getResenasByCompa);
router.post('/compa/:id', createResena);

module.exports = router;
