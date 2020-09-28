var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercado_liebre');
});

/*  */
router.get('/ofertas', function(req, res, next) {
  res.render('ofertas');
});

/*  */
router.get('/tiendas', function(req, res, next) {
  res.render('tiendas');
});

/*  */
router.get('/vender', function(req, res, next) {
  res.render('vender');
});

/*  */
router.get('/ayuda', function(req, res, next) {
  res.render('ayuda');
});

/*  */
router.get('/crea_cuenta', function(req, res, next) {
  res.render('crea_cuenta');
});

/*  */
router.get('/ingresa', function(req, res, next) {
  res.render('ingresa');
});

/*  */
router.get('/mis_compras', function(req, res, next) {
  res.render('mis_compras');
});

module.exports = router;