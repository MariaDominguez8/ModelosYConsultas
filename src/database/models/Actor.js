const actor = (sequelize, dataTypes) => {
  let alias = 'Actor',
      cols = {
        id: {
          type: dataTypes.INTEGER.UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        first_name: {
          type: dataTypes.STRING(100),
          allowNull: false
        },
        last_name: {
          type: dataTypes.STRING(100),
          allowNull: false
        },
        rating: {
          type: dataTypes.DECIMAL(3,1),
          defaultValue: null
        },
        favorite_movie_id:{
          type: dataTypes.INTEGER,
          defaultValue: null
        }
      },
      conf = {
        tableName: 'actors',
        timestamps: true,
        underscored: true
      }
      
      return sequelize.define(alias, cols, conf)
}

module.exports = actor;