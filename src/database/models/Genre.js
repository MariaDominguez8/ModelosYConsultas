const genre = (sequelize, dataTypes) => {
  const alias = 'Genre',
        cols = {
          id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
          },
          active: {
            type: dataTypes.BOOLEAN,
            defaultValue: 1
          }       
        },
        conf = {
          tableName: 'genres',
          timestamps: true,
          underscored: true
        };

  return sequelize.define(alias, cols, conf);
}

module.exports = genre;