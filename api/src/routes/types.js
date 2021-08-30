const express = require('express');
const router = express.Router();
const axios = require('axios');
const {Pokemon, Type} = require('../db')

router.get('/', async (req, res) => {
    try{
      let apiResponse = await axios({
        url: 'https://pokeapi.co/api/v2/type',
        method: 'get'
      });
      
      let allTypes = [];
      apiResponse.data.results.map(t => allTypes.push(t.name))
      
      for(let i=0; i<allTypes.length; i++){
        const [type, typeCreated] = await Type.findOrCreate({
            where: {
              name: allTypes[i]
            }
        });
      }

      res.status(200).json(allTypes)

    } catch (error){
      res.status(500).json({ message: error });
    }
  });

module.exports = router;
