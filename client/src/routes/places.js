const router = require('express-promise-router')();

const {
    index,
    newPlace,
    getPlace,
    replacePlace,
    deletePlace,
} = require('../controllers/placeController');

router.get('/', index);
router.get('/:placeId', getPlace);

router.post('/', newPlace);

router.put('/:placeId', replacePlace);

router.delete('/:placeId', deletePlace);



module.exports = router;