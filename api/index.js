
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});

/*################# GET TODOS LOS POKEMONS #################*/ 
server.get('/pokemons', async (req, res) => {
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
server.get('/pokemons/:pokemonId', async (req, res) => {
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