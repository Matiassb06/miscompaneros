const router = require('express').Router();
const {
  searchCompas, getUniversidades, getByUniversidad, getCompaById, createCompa
} = require('../controllers/compasController');

router.get('/search',               searchCompas);
router.get('/universidades',        getUniversidades);
router.get('/universidad/:nombre',  getByUniversidad);
router.get('/:id',                  getCompaById);
router.post('/',                    createCompa);

module.exports = router;
