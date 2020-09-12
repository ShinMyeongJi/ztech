module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users', {
    user_id: {
      primaryKey :true,
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true
    },
    user_name: {
      type: DataTypes.STRING(16),
      allowNull: false,
    },
    user_pwd: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    profile_img: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    timestamps : false,
    charset : "utf8",
    collate : "utf8_general_ci"
  });

};
