// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// associations

// Product belongs to Category
Product.belongsTo(Category, {
	foreignKey: 'category_id',
});

// Category has many Product models
Category.hasMany(Product, {
	foreignKey: 'category_id',
});

// Product belongs to many Tag models using the ProductTag
Product.belongsToMany(Tag, {
	through: ProductTag,
	foreignKey: 'product_id',
});

// Tag belons to many Product models
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
