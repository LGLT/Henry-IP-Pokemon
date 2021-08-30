const express = require('express');
const router = express.Router();
const axios = require('axios');
const {Pokemon, Type} = require('../db')

var pokemonsId = [];
//  Función generadora de ID para los pokemones creados
const generatorId = () => {
  let id = pokemonsId[pokemonsId.length-1]+1
  pokemonsId.push(id);
  return id;
}


/*################# GET TODOS LOS POKEMONS #################*/ 
router.get('/', async (req, res) => {
  if(req.query.name){
    try{
      let apiResponse = await axios({
        url: `https://pokeapi.co/api/v2/pokemon/${req.query.name}`,
        method: 'get'
      });
      console.log(req.query.name)
      return res.status(200).json(apiResponse.data);
  
    } catch (error){
        const localPokemon = await Pokemon.findAll({
          where:{
            name: req.query.name
          },
        });
        console.log(localPokemon)
        if(localPokemon.length>0) return res.status(200).json(localPokemon);
      // console.log(pokemonCreated)
      return res.status(500).json({ message: error });
    }
  } 
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
            if(pokemonsId.indexOf(parseInt(id)) === -1) pokemonsId.push(parseInt(id))
            return parseInt(id);
      }
    
      while(apiResponse.data.next){
        apiResponse.data.results.map(p => { 
          p.id = pokemonId(p)
          allPokemon.push(p); 
        });
        try{
          apiResponse = await axios({
            url: apiResponse.data.next,
            method: 'get'
          });
        } catch (error){
          res.status(500).json({ message: error });
        }
        if(!apiResponse.data.next){
          apiResponse.data.results.map(p => { 
            p.id = pokemonId(p)
            allPokemon.push(p); 
          });
          break;
        } 
      }

      const dbPokemons = await Pokemon.findAll({
        include: Type
      });
      
      dbPokemons.map(p => allPokemon.push(p))
      console.log(dbPokemons);
      res.status(200).json(allPokemon);
  
    } catch (error){
      res.status(500).json({ message: error });
    }
  });
  
/*################# GET LA INFO DE UN POKEMON #################*/ 
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

  // router.get('/?name=pokemonName', async (req, res) => {
  //   const { name } = req.query;

  //   if(name){
  //     try{
  //       let apiResponse = await axios({
  //         url: `https://pokeapi.co/api/v2/pokemon/${name}`,
  //         method: 'get'
  //       });
  //       console.log(name)
  //       res.status(200).json(apiResponse.data);
    
  //     } catch (error){
  //       // const [pokemon, pokemonCreated] = await Pokemon.findOrCreate({
  //       //   where: {
  //       //     name,
  //       //   }
  //       // });
  //       // console.log(pokemonCreated)
  //       res.status(500).json({ message: error });
  //     }
  //   }
    
  // });

  /*################# CREAR UN NUEVO POKEMON #################*/ 
  router.post('/', async function(req, res) {
    const {name, hp, attack, defense, speed, height, weight, pokemonType} = req.body;

    console.log(pokemonType)

    const [pokemon, pokemonCreated] = await Pokemon.findOrCreate({
      where: {
        id: generatorId(),
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight
      }
    });
    
    if(Array.isArray(pokemonType)){
      for(let i=0; i<pokemonType.length; i++){
        const [type, typeCreated] = await Type.findOrCreate({
          where: {
            name: pokemonType[i]
          }
        });
        await pokemon.addType(type);
        await type.addPokemon(pokemon);
      }
    } else{
      const [type, typeCreated] = await Type.findOrCreate({
        where: {
          name: pokemonType
        }
      });
  
      await pokemon.addType(type);
      await type.addPokemon(pokemon);
    }
    console.log([pokemonsId[pokemonsId.length-1]])
    res.status(200).redirect('http://localhost:3000/pokemons/createPokemon');
  })

  module.exports = router;