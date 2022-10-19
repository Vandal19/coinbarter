# CoinBarter

CoinBarter is an e-commerce web application that enables users to purchase electronic merchandise from Amazon using crypto currencies, and pay using Ethereum directly from their MetaMask wallet.

This application is built with a Node.js backend and a React frontend, and  makes requests to an API to fetch and store products data from Amazon. It uses the React-Redux library for state management, React-Router for routing, and Material-UI for the UI components.

## Tech Stack

- Front-End: React, React-Redux, MUI, Axios
- Back-End: Node, Express, PostgreSQL, React-Router

## Product Overview

### Home Page

![Home Page](https://user-images.githubusercontent.com/100328767/196586802-ebbced79-d376-45f8-b566-0dc1ca827b82.gif)

### Login Page

![Login Page](https://user-images.githubusercontent.com/100328767/196586833-1f4ae225-0f97-44b6-8cf8-5f4b68c0fd68.gif)

### Products Page

![Products Page](https://user-images.githubusercontent.com/100328767/196588483-3ff92f2f-175a-4c2c-8668-b0295d80dad3.gif)

### Product Details Popup

![Product Details Popup](https://user-images.githubusercontent.com/100328767/196586938-bcc0aa94-e305-4ae4-9372-00c42b347b7d.gif)

### My Favorites

![My Favorites](https://user-images.githubusercontent.com/100328767/196586955-99a59fd5-4da5-494f-8f73-7f371b91a55a.gif)

### Search Products

![Search Products](https://user-images.githubusercontent.com/100328767/196586975-826aa5ec-10c7-4055-a799-fda9c585e25f.gif)

### My Cart

![My Cart](https://user-images.githubusercontent.com/100328767/196586990-d8b373b3-e9c0-4370-924e-6edb1cccc803.gif)

### Review My Order

![Review My Order](https://user-images.githubusercontent.com/100328767/196587336-f4336939-ec99-41de-8073-cde529c0aed8.gif)

### Checkout Page

![Checkout Page](https://user-images.githubusercontent.com/100328767/196587013-ef54df73-76d0-4468-9435-9dcd1437f397.gif)

### Payment Page

![Payment Page](https://user-images.githubusercontent.com/100328767/196587032-d22f94ab-4cbd-4549-834f-94144ec9fe69.gif)

### Etherscan Tx Confirmation + My Orders Page

![Etherscan Confirmation + My Orders Page](https://user-images.githubusercontent.com/100328767/196587044-afe4a647-d9bb-4bee-b967-f973014194ca.gif)

## Setup

1. Clone this repository onto your local device.
2. Install dependencies:
    ```sh
    cd coinbarter && npm install 
    cd client-side && npm install
    cd server && npm install
    ```
3. Register for [Rainforest API](https://www.rainforestapi.com/) keys.
4. Create PSQL database by running schema & seeds file.
    ```sh
    psql
    \c coinbarter
    \i server/db/schema/01_tables.sql;
    \i server/db/seeds/01_seeds.sql;
    \x 
    ```
5. Seed database by running server > index.js.
6. Start the web server. The app will be served at <http://localhost:8000/>.
    ```sh
    cd server
    npm start
    ```
7. Start the development server. The app will be served at <http://localhost:3000/>.
    ```sh
    cd client-side
    npm start
    ```
8. Navigate to <http://localhost:3000/> on your browser to view CoinBarter.

## User Stories

- As a new user, I want to sign up, so that I can use the app
- As a logged in user, I want to look for items to buy, so that I can add it to my favorites
- As a logged in user, I want to add items in my favorites to my cart, so that I can purchase it
- As a logged in user, I want to view my cart, so that I can confirm my order before purchasing
- As a logged in user, I want to be able to connect my metamask wallet, so that I can purchase my items using crypto 
- As a logged in user, I want to see my confirmation page after making a purchase 

## Dependencies

- axios
- bcrypt
- fontsource
- reduxjs
- ethers
- formik
- react-alice-carousel
