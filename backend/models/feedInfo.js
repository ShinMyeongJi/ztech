module.exports = (sequelize, DataTypes) => {
  return sequelize.define('feed_info', {
    feed_id: {
      primaryKey :true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement : true
    },
    subject: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(10000),
      allowNull: true,
    },
    imgs: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    crt_dt : {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()')
    },
    mod_dt:{
      type: DataTypes.DATE,
      allowNull:true
    }
  });

};
