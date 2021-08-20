const { Router } = require('express');
const {conn} = require('../db')
const {Pokemon} = require('../db')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require('./pokemons')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemonsRouter);
console.log(conn.models);
console.log(Pokemon);

module.exports = router;
