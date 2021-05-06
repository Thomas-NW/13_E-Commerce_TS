// Category.js File Info


const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;



// Index.js file

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id',
  });


  // Categories have many Products
  Category.hasMany(Product, {
    foreignKey: 'category_id',
  })
  
  // Products belongToMany Tags (through ProductTag)
  
  Product.belongsToMany(Tag, {
    through: {
      model: ProductTag,
      unique: false
    },
  
  })
  
  // Tags belongToMany Products (through ProductTag)
  
  Tag.belongsToMany(Product, {
    through: {
      model: ProductTag,
      unique: false
    }
  })

    // package.jason

  
{
    "name": "ecommerce-backend",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node server.js",
      "watch": "nodemon server.js",
      "seed": "node seeds/index.js"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/cdfishe1/ecommerce-backend.git"
    },
    "keywords": [],
    "author": "Charles Fisher",
    "license": "MIT",
    "devDependencies": {
      "nodemon": "^2.0.3"
    },
    "dependencies": {
      "dotenv": "^8.2.0",
      "express": "^4.17.1",
      "mysql2": "^2.1.0",
      "sequelize": "^5.21.7"
    }
  }
  