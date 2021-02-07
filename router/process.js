const express = require('express');
const router = express.Router();

const processMid = require('../middlewares/processMiddleware');
const processHand = require('../handler/processHandler');

router.use(processMid);

router.get('/', processHand);
router.post('/', processHand);
router.put('/', processHand);
router.delete('/', processHand);

module.exports = router;