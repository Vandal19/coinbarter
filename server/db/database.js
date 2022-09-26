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
      `Insert into products(category_id, brand_name, price, description, cover_image_url, create_date, update_date, stock)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;`,
        [product.category_id, product.brand_name, product.price, product.description, product.cover_image_url, product.create_date, product.update_date, product.stock]
    );
    return result.rows;
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addProduct
}