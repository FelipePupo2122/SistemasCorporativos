const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Bem-vindo à página inicial');
});

module.exports = router;
