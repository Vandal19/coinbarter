-- INSERT INTO users (name, password, email, phone, is_admin)
-- VALUES
-- ('Coinbarteradmin', 'Password', 'admin@gmail.com', '1234567891', True),
-- ('BOB', 'Password', 'bob@gmail.com', '6041234567', False)
-- ;

-- INSERT INTO categories (id, name)
-- VALUES

-- ('2407748011', 'Cell Phones & Accessories'),
-- ('565108', 'Computers & Accessories'),
-- ('6463520011', 'Television & Video'),
-- ('7926841011', 'Video Game Consoles & Accessories'),
-- ('bestsellers_electronics', 'Home Page Bestsellers');

INSERT INTO favorites (user_id, listing_id)
VALUES
(2, 1);



-- INSERT INTO orders (user_id, listing_id, price, quantity, shipping_address, order_status, create_date, update_date)
-- VALUES
-- (2, 66, 349.99, 2, '22 Beverly Hills Los Angeles USA 90210', 'successful', '2022-10-12 19:10:25-07', '2022-10-12 19:10:25-07' );

-- INSERT INTO order_details (user_id, order_id, listing_id, price, quantity)
-- VALUES
-- (2, 1, 66, 349.99, 2);


