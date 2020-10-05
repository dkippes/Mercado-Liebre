var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('mercado_liebre');
});

/* GET Ofertas page. */
router.get('/ofertas', function (req, res, next) {
  res.render('ofertas');
});

/* GET Tiendas Oficiales page. */
router.get('/tiendas', function (req, res, next) {
  res.render('tiendas');
});

/* GET Vender page. */
router.get('/vender', function (req, res, next) {
  res.render('vender');
});

/* GET Ayuda page. */
router.get('/ayuda', function (req, res, next) {
  res.render('ayuda');
});

/* GET Crea tu cuenta page. */
router.get('/register', function (req, res, next) {
  res.render('register');
});

/* GET Ingresa page. */
router.get('/login', function (req, res, next) {
  res.render('login');
});

/* GET Mis Compras page. */
router.get('/mis_compras', function (req, res, next) {
  res.render('mis_compras');
});

module.exports = router;