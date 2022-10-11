require('dotenv').config( {path: './'} );
const { addProduct } = require("./db/database");

const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const morgan = require("morgan");
const axios = require('axios');
// const bcrypt = require("bcrypt")
// const session = require("express-session")



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(morgan());
// app.use(session({
//   secret: process.env.COOKIE_SECRET,
//   credentials: true,
//   name: "session-id",
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: process.env.ENVIRONMENT === "production",
//     httpOnly: true,
//     sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax"
//   }
// }))

// connect to routes
const categoryRoutes = require('./routes/categoryRoutes');
const products = require("./products")
const userRoutes = require("./routes/userRoutes")
const favoriteRoutes = require("./routes/favoriteRoutes")
const orderRoutes = require("./routes/orderRoutes")

app.use('/products', categoryRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/my-orders', orderRoutes);

// Login authentication
app.use("/auth", userRoutes)


// testing initialize
app.get('/data', (req, res) => {
  res.json({message: "Seems to work!"});
});


// get all categories
app.get('/categories', (req, res) => {

  // make the http GET request to Rainforest API
  return axios.get(`https://api.rainforestapi.com/categories?api_key=${process.env.API_KEY}&domain=amazon.com`)
    .then(response => {

      // print the JSON response from Rainforest API
      res.send(response.data.categories);

    }).catch(error => {
      // catch and print the error
      console.log(error);
    });
});


// get products within a certain category
app.get('/products/categories/:category', (req, res) => {

  // set up the request parameters
  const params = {
    api_key: "0CEB324D9F3949AE896B07885033BA92",
    type: "bestsellers",
    category_id: req.params.category,
    amazon_domain: "amazon.com"
  }

  // make the http GET request to Rainforest API
  return axios.get('https://api.rainforestapi.com/request', { params })
    .then(response => {


      // [product.category_id, product.brand_name, product.price, product.description, product.cover_image_url, product.create_date, product.update_date, product.stock]

      const products = response.data.bestsellers;
      for (let a of products) {

        let randomStock = parseInt(Math.random() * 100);

        let removeCommaProductPrice = a.price?.raw.replace(/,/g, '')
        let productPrice = a.price ? removeCommaProductPrice.slice(1) : "not available";

        const product = {
          category_id: req.params.category,
          brand_name: a.title,
          price: productPrice,
          cover_image_url: a.image,
          create_date: new Date(Date.now()),
          update_date: new Date(Date.now()),
          stock: randomStock
        }
        addProduct(product);
      }

      // print the JSON response from Rainforest API
      res.json(response.data.bestsellers);

    }).catch(error => {
      // catch and print the error
      console.log(error);
    })

});


// get bestselling electronics products on homepage
app.get('/products/categories/bestsellers_electronics', (req, res) => {

  // set up the request parameters
  const params = {
    api_key: "0CEB324D9F3949AE896B07885033BA92",
    type: "category",
    amazon_domain: "amazon.com"
  }

  // make the http GET request to Rainforest API
  return axios.get('https://api.rainforestapi.com/request', { params })
    .then(response => {


      // [product.category_id, product.brand_name, product.price, product.description, product.cover_image_url, product.create_date, product.update_date, product.stock]

      // const products = response.data.bestsellers;
      // for (let a of products) {

      //   let randomStock = parseInt(Math.random() * 100);

      //   let removeCommaProductPrice = a.price.raw.replaceAll(',', '')
      //   let productPrice = a.price ? removeCommaProductPrice.slice(1) : "not available";

      //   const product = {
      //     category_id: category_id,
      //     brand_name: a.title,
      //     price: productPrice,
      //     cover_image_url: a.image,
      //     create_date: new Date(Date.now()),
      //     update_date: new Date(Date.now()),
      //     stock: randomStock
      //   }
      //   addProduct(product);
      // }

      // print the JSON response from Rainforest API
      res.json(response.data.bestsellers);

    }).catch(error => {
      // catch and print the error
      console.log(error);
    })

});


// get individual product data
app.get('/products/:productID', (req, res) => {

  // set up the request parameters
  const params = {
    api_key: "A2C043C57CB045B6925670BDDCCB00AC",
    type: "product",
    amazon_domain: "amazon.com",
    asin: "B09LP9TM5L"
  }

  // make the http GET request to Rainforest API
  return axios.get('https://api.rainforestapi.com/request', { params })
  .then(response => {

    // print the JSON response from Rainforest API
    res.json(response.data.product.title);

  }).catch(error => {
    // catch and print the error
    console.log(error);
  })

});

// get bestselling electronics products on homepage
// app.get('/products/categories/bestsellers_electronics', (req, res) => {

//   // set up the request parameters
//   const params = {
//     api_key: "0CEB324D9F3949AE896B07885033BA92",
//     type: "category",
//     category_id: "bestsellers_electronics",
//     amazon_domain: "amazon.com"
//   }

//   // make the http GET request to Rainforest API
//   return axios.get('https://api.rainforestapi.com/request', { params })
//     .then(response => {


//       // [product.category_id, product.brand_name, product.price, product.description, product.cover_image_url, product.create_date, product.update_date, product.stock]

//       // const products = response.data.bestsellers;
//       // for (let a of products) {

//       //   let randomStock = parseInt(Math.random() * 100);

//       //   let removeCommaProductPrice = a.price.raw.replaceAll(',', '')
//       //   let productPrice = a.price ? removeCommaProductPrice.slice(1) : "not available";

//       //   const product = {
//       //     category_id: req.params.category,
//       //     brand_name: a.title,
//       //     price: productPrice,
//       //     cover_image_url: a.image,
//       //     create_date: new Date(Date.now()),
//       //     update_date: new Date(Date.now()),
//       //     stock: randomStock
//       //   }
//       //   addProduct(product);
//       // }

//       // print the JSON response from Rainforest API
//       res.json(response.data);
//       console.log("data", response.data)

//     }).catch(error => {
//       // catch and print the error
//       console.log(error);
//     })

// });



// testing db connection to frontend
app.get("/", cors(), async (req, res) => {
  res.send("This is working");
});

app.post("/post_name", async (req, res) => {
  let { name } = req.body;
  console.log(name);
});

app.get("/home", async (req, res) => {
  res.send(`Testing data`);
});

app.get("/products", (req, res) => {
  res.send(products)
})

app.post("/products", async (req, res) => {
  const product = {
    ...req.body,
    category_id: parseFloat(req.body.category_id),
    price: parseFloat(req.body.price),
    stock: parseFloat(req.body.stock)
  };
  await addProduct(product);
  // console.log("product", product)
});



app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
