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
    console.log(result)
    // return result.rows;
  } catch (error) {
    console.log(error)
  }
}

// functions to query database based on different categories or filter by price
    // for each category
      // cell phones: product.category_id = 2811119011
      // computers: product.category_id = 541966
      // television: product.category_id = 1266092011
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

// const getComputers = async () => {
//   try {
//     const result = await db.query(
//       `SELECT * FROM products WHERE category_id='541966';`
//     );
//     console.log(result)
//     return result.rows;
//   } catch (error) {
//     console.log(error)
//   }
// }

// const getTelevision = async () => {
//   try {
//     const result = await db.query(
//       `SELECT * FROM products WHERE category_id='7926841011';`
//     );
//     console.log(result)
//     return result.rows;
//   } catch (error) {
//     console.log(error)
//   }
// }

// const getGaming = async () => {
//   try {
//     const result = await db.query(
//       `SELECT * FROM products WHERE category_id='1266092011';`
//     );
//     console.log(result)
//     return result.rows;
//   } catch (error) {
//     console.log(error)
//   }
// }


module.exports = {
  addProduct,
  getProductsForCategory
}