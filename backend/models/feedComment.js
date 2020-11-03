module.exports = (sequelize, DataTypes) => {
  var feedComment = sequelize.define('feed_comment', {
    comment_id: {
      primaryKey :true,
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement : true
    },
    comment_depth : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    feed_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    delFlag : {
      type : DataTypes.STRING(5),
      allowNull : false
    },
    like: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislike: {
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
    },
    parent_com_id : {
      type : DataTypes.INTEGER,
      allowNull : true,
      defaultValue : 0
    }
  }, {
    timestamps : false,
    charset : "utf8",
    collate : "utf8_general_ci"
  });

  return feedComment;
};
