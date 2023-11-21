const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.brands);
    }
  }
  
  products.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDv4
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'products',
      timestamps: true,
      underscored: true,
    }
  );

  return products;
};
