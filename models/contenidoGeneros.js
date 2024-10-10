const { sequelize } = require("../conexion/database");
const { DataTypes } = require("sequelize");
const Contenido = require("./contenido");
const Genero = require("./generos");

const Contenido_Generos = sequelize.define('Contenido_Generos', {
  contenido_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Contenido,
      key: 'id',
    },
    primaryKey: true,
  },
  genero_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Generos,
      key: 'id',
    },
    primaryKey: true,
  },
}, {
  tableName: 'Contenido_Generos',
  timestamps: false,
});

module.exports={ Contenido_Generos };
