const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.STRING
    },
    fuerza: {
      type: DataTypes.STRING
    },
    defensa: {
      type: DataTypes.STRING
    },
    velocidad: {
      type: DataTypes.STRING,
    },
    altura: {
      type: DataTypes.STRING,
    },
    peso: {
      type: DataTypes.STRING,
    },
  },{
    // timestamps: false
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};
