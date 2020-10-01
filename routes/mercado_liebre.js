var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('mercado_liebre');
});

/* GET Ofertas page. */
router.get('/ofertas', function(req, res, next) {
  res.render('ofertas');
});

/* GET Tiendas Oficiales page. */
router.get('/tiendas', function(req, res, next) {
  res.render('tiendas');
});

/* GET Vender page. */
router.get('/vender', function(req, res, next) {
  res.render('vender');
});

/* GET Ayuda page. */
router.get('/ayuda', function(req, res, next) {
  res.render('ayuda');
});

/* GET Crea tu cuenta page. */
router.get('/crea_cuenta', function(req, res, next) {
  res.render('crea_cuenta');
});

/* GET Ingresa page. */
router.get('/ingresa', function(req, res, next) {
  res.render('ingresa');
});

/* GET Mis Compras page. */
router.get('/mis_compras', function(req, res, next) {
  res.render('mis_compras');
});

module.exports = router;