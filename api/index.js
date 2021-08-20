
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    
    var pokemonCreado = conn.models.Pokemon.create({
      nombre: "PruebaMon",
      vida: "68",
      fuerza: "31",
      defensa: "98",
      velocidad: "55",
      altura: "11",
      peso: "67"
    });

    var categoriaCreada = conn.models.Type.create({
      nombre: "Diamante"
    })

    Promise.all([pokemonCreado, categoriaCreada])
            .then(res => {
              console.log("Datos precargados");
            });
  });
});

