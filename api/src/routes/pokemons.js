const express = require('express');
const router = express.Router();
const axios = require('axios');
const {Pokemon, Type} = require('../db')
// const { Pokemon, Type } = require();


/*################# GET TODOS LOS POKEMONS #################*/ 
router.get('/', async (req, res) => {
    try{
      let apiResponse = await axios({
        url: 'https://pokeapi.co/api/v2/pokemon',
        method: 'get'
      });
  
      var allPokemon = [];
      //  Función para generar el ID de cada Pokemon basado en su parámetro de ruta
      let pokemonId = function(pokemon){
            let id = pokemon.url;
            id = id.substring(0, id.length -1);
            id = id.substring(id.lastIndexOf('/') + 1);
            return parseInt(id);
      }
    
      while(apiResponse.data.next){
        apiResponse.data.results.map(p => { 
          p.id = pokemonId(p)
          allPokemon.push(p); 
        })
        try{
          apiResponse = await axios({
            url: apiResponse.data.next,
            method: 'get'
          });
        } catch (error){
          res.status(500).json({ message: error });
        }
      }
      res.status(200).json(allPokemon);
  
    } catch (error){
      res.status(500).json({ message: error });
    }
  });
  
  /////////////////////////////////////////// GET LA INFO DE UN POKEMON
  router.get('/:pokemonId', async (req, res) => {
    const id = req.params.pokemonId;
    try{
      let apiResponse = await axios({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
        method: 'get'
      });
      res.status(200).json([apiResponse.data]);
  
    } catch (error){
      res.status(500).json({ message: error });
    }
    
  });

  router.post('/create', async function(req, res) {
    const {nombre, vida, fuerza, defensa, velocidad, altura, peso, tipo} = req.body;

    const [pokemon, pokemonCreated] = await Pokemon.findOrCreate({
      where: {
        nombre,
        vida,
        fuerza,
        defensa,
        velocidad,
        altura,
        peso
      }
    });

    const [type, typeCreated] = await Type.findOrCreate({
      where: {
        nombre: tipo
      }
    });

    await pokemon.addType(type);
    await type.addPokemon(pokemon);

    res.redirect("http://localhost:3000/")
  })

  module.exports = router;