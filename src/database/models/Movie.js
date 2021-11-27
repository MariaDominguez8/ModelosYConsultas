const movie = (sequelize, dataTypes) => {
  let alias = 'Movie';
  let cols = {
    id: {
      type: dataTypes.INTEGER.UNSIGNED,//UNSIGNED = no soporta signos
      autoIncrement: true,
      allowNull: false,// no soporta nulo
      primaryKey: true
    },
    title: {
      type: dataTypes.STRING(500),
      allowNull: false
    },
    rating: {
      type: dataTypes.DECIMAL(3,1).UNSIGNED,
      allowNull: false
    },
    awards: {
      type: dataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    release_date: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    length: {
      type: dataTypes.INTEGER.UNSIGNED,
      defaultValue: null
    },
    genre_id: {
      type: dataTypes.INTEGER.UNSIGNED,
      defaultValue: null
    }
  };
  let conf = {
    tableName: 'movies', //no es necesario si coincide con el plural del modelo
    timestamps: true, // no es necesario si la tabla tiene timestamps
    underscored: true // configuración necesaria si tiene guión bajo created_at y updated_at(timestamps) 
  };

  return sequelize.define(alias, cols, conf)
}


module.exports = movie;