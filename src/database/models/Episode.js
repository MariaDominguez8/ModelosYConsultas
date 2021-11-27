const episode = (sequelize, dataTypes) => {
  const cols = {
      id: {
        type: dataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: dataTypes.STRING(500),
        defaultValue: null
      },
      number: {
        type: dataTypes.INTEGER,
        unique: true,
        defaultValue: null
      },
      release_date: {
        type: dataTypes.DATE,
        allowNull: false
      },
      rating: {
        type: dataTypes.DECIMAL(3,1),
        allowNull: false
      },
      session_id: {
        type: dataTypes.INTEGER,
        unique: true,
        defaultValue: null
      },
    },
    conf = {
      tableName: 'episodes',
      timestamps: true,
      underscored: true
    }
  
  return sequelize.define('Episode', cols, conf);
}

module.exports = episode