const express = require('express');
const Operadores = require('../models/operadores')
const Empilhadeiras = require('../models/empilhadeira')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/Dashboard', (req, res) => {
    res.render('dashboard');
});
router.get('/coletor', (req, res) => {
    res.render('coletor');
});
router.get('/Dashboard/acesso', (req, res) => {
    
        res.render('acesso')
});

router.get('/Dashboard/monitoramento', (req, res) => {
    res.render('monitoramento');
});

router.get('/Dashboard/operadores', (req, res) => {
    Operadores.findAll().then(function (operadores) {
        res.render('operadores', {
            operador: operadores
        })
    })
});

router.get('/Dashboard/empilhadeiras', (req, res) => {
    Empilhadeiras.findAll().then(function (empilhadeiras) {
        res.render('empilhadeiras', {
            empilhadeiras: empilhadeiras
        })
    })
});

module.exports = router;