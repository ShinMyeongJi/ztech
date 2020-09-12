module.exports = (sequelize, DataTypes) => {
  return sequelize.define('stock_info', {
    id: {
      primaryKey :true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement : true
    },
    subject: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(6000),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(12),
      allowNull: true,
    },
    crt_dt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('now()')
    },
    mod_dt:{
      type: DataTypes.DATE,
      allowNull:true
    }
  }, {
    timestamps: false,
    charset : "utf8",
    collate : "utf8_general_ci"
  });
};
