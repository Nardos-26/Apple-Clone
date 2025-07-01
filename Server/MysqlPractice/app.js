// Question 1: Create a MySQL database by the name "myDB" and create a database user by
// the name "myDBuser" with a permissions to connect with the "myDB" database. Use the
// "mysql" module to create a connection with the newly created database. Display console
// message if the connection is successful or if it has an error.
// Please find further instructions under the “Instructions for question 1” below.
const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "myDBuser",
  password: "newuser1",
  database: "mydb",
});

connection.connect((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("connected");
  }
});

app.get("/", (req, res) => {
  res.send("server work");
});

app.listen(1233, () => console.log("work to : 1233"));

// Question 2: Here is a link to a document that contains the tables we need to create and
// convert the apple.com/iphones page into a dynamic page with a database. As you can see
// from the document, there are 5 tables that are needed (please scroll horizontally and
// vertically over the document to see all the 5 tables). Write a SQL query to create the
// apple.com tables inside of the "myDB" database you created above. Once you write the
// queries, use the "mysql" module to execute the queries on the database. Try both of these
// methods to initiate the execution of the queries:
// ● Include the execution code directly in the module to be executed as you run the app
// ● Use the Express module to receive requests. Configure your module in a way that it
// executes the queries when the "/install" URL is visited.
// Please find further instructions under the “Instructions for question 2” below
app.get("/install", (req, res) => {
  const ProductTable = `CREATE TABLE products(
product_url varchar(100)NOT NULL,
product_name varchar(20)NOT NULL,
product_id INT AUTO_INCREMENT PRIMARY KEY)`;

  const productdescription = `CREATE TABLE productDescription(
Description_id INT AUTO_INCREMENT PRIMARY KEY,
product_id INT(10) NOT NULL,
product_brief_description TEXT NOT NULL,
product_description TEXT NOT NULL,
product_img TEXT NOT NULL,
product_link varchar(40) NOT NULL,
FOREIGN KEY(product_id)REFERENCES products(product_id)
)`;

  const ProductpriceTable = `CREATE TABLE productpriceTable(
price_id INT AUTO_INCREMENT PRIMARY KEY,
product_id INT(10) NOT NULL,
starting_price varchar(25) NOT NULL,
price_range varchar(500) NOT NULL,
FOREIGN KEY(product_id)REFERENCES products(product_id)
)`;
  const UserTable = `CREATE TABLE userTable(
user_id INT AUTO_INCREMENT PRIMARY KEY,
user_name varchar(10) NOT NULL,
user_password varchar(25) NOT NULL
)`;

  const ordersTable = `CREATE TABLE orderTable(
order_id INT AUTO_INCREMENT PRIMARY KEY,
product_id INT(5) NOT NULL,
user_id INT(10) NOT NULL,
FOREIGN KEY(product_id)REFERENCES products(product_id),
FOREIGN KEY (user_id)REFERENCES UserTable(user_id)
)`;

  //   const productTable = `CREATE TABLE`;
  connection.query(ProductTable, (error) => {
    if (error) console.log(error.message);
    console.log("table create");
  });

  connection.query(productdescription, (error) => {
    if (error) console.log(error.message);
    console.log("table create");
  });

  connection.query(ProductpriceTable, (error) => {
    if (error) console.log(error.message);
    console.log("table create");
  });

  connection.query(UserTable, (error) => {
    if (error) console.log(error.message);
    console.log("table create");
  });

  connection.query(ordersTable, (error) => {
    if (error) console.log(error.message);
    console.log("table create");
  });
  res.send("table successefuly createde");
});
// method two
// app.get("/install",(req,res)=>{
//     const ProductTable = `CREATE TABLE products(
// product_id INT AUTO_INCREMENT PRIMARY KEY,
// product_url varchar(100)NOT NULL,
// product_name varchar(20)NOT NULL)`;

// });
// const productdescription = `CREATE TABLE productDescription(
// Description_id INT AUTO_INCREMENT PRIMARY KEY,
// product_id INT(10) NOT NULL,
// FOREIGN KEY(product_id)REFERENCES products(product_id),
// product_brief_description varchar(150) NOT NULL,
// product_description varchar(150) NOT NULL,
// product_img varchar(300) NOT NULL,
// product_link varchar(40) NOT NULL)`;

// const ProductpriceTable = `CREATE TABLE productpriceTable(
// price_id INT AUTO INCREMENT PRIMARY KEY,
// product_id INT(10) NOT NULL,
// FOREIGN KEY(product_id)REFERENCES products(product_id),
// starting_price INT(15) NOT NULL,
// price_range varchar(500) NOT NULL
// )`;
// const UserTable = `CREATE TABLE userTable(
// user_id INT AUTO INCREMENT PRIMARY KEY,
// product_id INT(10) NOT NULL,
// FOREIGN KEY (product_id)REFERENCES products(product_id),
// user_name varchar(50) NOT NULL,
// user_password varchar(25) NOT NULL)`;

// const ordersTable = `CREATE TABLE orderTable(
// order_id INT AUTO INCREMENT PRIMARY KEY,
// product_id INT(5) NOT NULL,
// user_id INT(10) NOT NULL,
// FOREIGN KEY (product_id)REFERENCES products(product_id),
// FOREIGN KEY (user_id)REFERENCES userTable(user_id)
// )`;
// connection.query(ProductTable, (error) => {
//   if (error) console.log(error.message);
//   console.log("table create");
// });

// connection.query(productdescription, (error) => {
//   if (error) console.log(error.message);
//   console.log("table create");
// });

// connection.query(ProductpriceTable, (error) => {
//   if (error) console.log(error.message);
//   console.log("table create");
// });

// connection.query(UserTable, (error) => {
//   if (error) console.log(error.message);
//   console.log("table create");
// });

// connection.query(ordersTable, (error) => {
//   if (error) console.log(error.message);
//   console.log("table create");
// });

// app.listen(1233, () => console.log("list to : 1233"));

// /////////////////////////////////////////
// // Question 3: Create an HTML file called, “index.html” with a form to populate the
// // "products" table you created above.
// // ● The form on the HTML page should send a POST request to a URL named
// "/add-product"
// ● Use Express to receive the POST request
// ● Use the body-parser module to parse the POST request sent to your Express server
// ● Write a SQL query to insert the data received from the HTML form into the
// "products" table
// ****************insert data****************

app.post("/addiphones", (req, res) => {
  const {
    productUrl,
    productName,
    ProductBriefDescription,
    productDescription,
    productImg,
    productLink,
    startprice,
    pricerange,
    user_name,
    user_password,
  } = req.body;

  const sql = `INSERT INTO products(product_url,product_name)VALUES (?, ?)`;
  const insertData = `INSERT INTO productDescription
    (product_id,product_brief_description,product_description,product_img,product_link)
    VALUES (?,?,?,?,?) `;
  const insertprice = `INSERT INTO productpriceTable(product_id,starting_price,price_range)VALUES (?,?,?)`;
  const insertuser = `INSERT INTO userTable(user_name,user_password)VALUES(?,?)`;

  connection.query(sql, [productUrl, productName], (err, results) => {
    if (err) return console.log("Error inserting product:", err.message);
    // res.send("All data inserted successfully");
    // const pid = results.insertId
    // console.log(pid);
    const productid = results.insertId;
    connection.query(
      insertData,
      [
        productid,
        ProductBriefDescription,
        productDescription,
        productImg,
        productLink,
      ],
      (err, results) => {
        if (err) return console.log("Error inserting product:", err.message);
        // res.send("All data inserted successfully");
      }
    );

    connection.query(
      insertprice,
      [productid, startprice, pricerange],
      (err, results) => {
        if (err) {
          return console.log("Error inserting product:", err.message);
          // res.status(500).send("Error inserting product price");
        }
      }
    );
    connection.query(insertuser, [user_name, user_password], (err, result) => {
      if (err) {
        return console.log("Error inserting product:", err.message);
      }
      const userid = result.insertId;
      let orderstable = `INSERT INTO orderTable(product_id,user_id)VALUES(?,?)`;
      connection.query(orderstable, [productid, userid], (err, result) => {
        if (err) return console.log(err.message);
      });
    });
  });

  res.send("All data inserted successfully");
});

// week-20 qu.2//
// Add this new route to your Node.js Express backend
app.get("/addiphones", (req, res) => {
  const sql = `
    SELECT p.product_id, p.product_name, p.product_url,
           d.product_brief_description, d.product_description,
           d.product_img, d.product_link,
           pr.starting_price, pr.price_range
    FROM products p
    JOIN productDescription d ON p.product_id = d.product_id
    JOIN productpriceTable pr ON p.product_id = pr.product_id
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching iPhones:", err.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

