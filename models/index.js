// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// associations

// Category has Products
Product.belongsTo(Category, {
	foreignKey: 'category_id',
});

// Categories has many Products
Category.hasMany(Product, {
	foreignKey: 'category_id',
});

// Product belongs to many via ProductTag
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: 'product_id',
});

// Tags belongs to many Products via ProductTag
Tag.belongsToMany(Product, {
	through: ProductTag,
	foreignKey: 'tag_id',
});

module.exports = {
	Product,
	Category,
	Tag,
	ProductTag,
};
