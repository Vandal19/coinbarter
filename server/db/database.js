/* eslint-disable camelcase */
// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./params");
const db = new Pool(dbParams);
db.connect();

const addProduct = async (
  product
) => {
  try {
    const result = await db.query(
      `Insert into products(category_id, brand_name, price, cover_image_url, create_date, update_date, stock)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;`,
        [product.category_id, product.brand_name, product.price, product.cover_image_url, product.create_date, product.update_date, product.stock]
    );
    return result.rows;
  } catch (error) {
    console.log(error)
  }
}

// functions to query database based on different categories or filter by price
    // for each category
      // cell phones: product.category_id = 2407748011
      // computers: product.category_id = 565108
      // television: product.category_id = 6463520011
      // gaming: product.category_id = 7926841011
    // for search term or title

// write routes that use these functions to send the data to frontend (res.JSON/res.send)

// function to add to favorites

const getProductsForCategory = async (category_id) => {
  try {
    const result = await db.query(
      `SELECT * FROM products WHERE category_id=$1;`, [category_id]
    );
    return result.rows;
  } catch (error) {
    console.log(error)
  }
}

const getUserByEmail = async(email) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);
    console.log("results", result)
    return result.rows[0]

  } catch (error) {
    console.log(error)
  }
}

// Favorites page
const addToFavorites = async(listingId) => {
  try {
    const result = await db.query(`
      INSERT INTO favorites(user_id, product_id, favorite)
      VALUES ($1, $2, true);`, [listingId]);
    return result

  } catch (error) {
    console.log(error)
  }
};

const loadFavorites = async(id) => {
  try {
    const result = await db.query(`
      SELECT products.* FROM products
      JOIN favorites ON favorites.listing_id = products.id
      WHERE favorites.user_id = $1;
    `, [id]);
    return result.rows;

  } catch (error) {
    console.log(error)
  }
};

const checkIfFavoriteExists = async(id) => {
  try {
    const result = await db.query(`
      SELECT products.* FROM products
      JOIN favorites ON favorites.listing_id = products.id
      WHERE favorites.user_id = $1;
   `, [id]);

    return result.rows;
  } catch (error) {
    console.log(error)
  }
};

const loadOrders = async(id) => {
try {
  const result = await db.query(`
  SELECT * FROM orders
  JOIN products ON orders.listing_id = products.id
  WHERE orders.user_id = $1;
`, [id]);
return result.rows;
} catch (error) {
  console.log(error)
}
}
console.log("orders", loadOrders)



module.exports = {
  addProduct,
  getProductsForCategory,
  getUserByEmail,
  addToFavorites,
  loadFavorites,
  checkIfFavoriteExists,
  loadOrders,
}