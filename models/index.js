// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "",
});

// Categories have many Products
Category.belongsToMany(Product, {
  foreignKey: "",
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "",
  foreignKey: "",
  onDelete: "",
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "",
  foreignKey: "",
  onDelete: "",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
