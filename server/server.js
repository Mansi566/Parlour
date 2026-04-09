//this is my mongoDB connection and API routes for customer, category and post tables. You can use this code as a reference to create your own server.js file. Make sure to install the required dependencies (express, mongoose, multer, cors) and create the necessary models (Category, Customer, Post) in the 'model' folder.

// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const cors = require("cors");
// const Category = require("./model/Category");
// const Customer = require("./model/customer");
// const Post = require("./model/post");

// const app = express();
// app.use(cors()); // This allows your React app to talk to the server
// app.use(express.json());

// // 1. Connect to Local MongoDB
// // Is line ko update karein:
// mongoose.connect("mongodb://127.0.0.1:27017/my_database") 
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // 2. Saves images to a 'uploads' folder
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // Create the 'uploads' folder statically so you can see the images in browser
// app.use("/uploads", express.static("uploads"));

// // //3. your post route for customer table
// app.post("/api/customers", async (req, res) => {
//   try {
//     const newCustomer = new Customer({
//       name: req.body.name,
//       email: req.body.email,
//       mobile: req.body.mobile,
//     });
//     const savedCustomer = await newCustomer.save();

//     res.status(201).json(savedCustomer);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // 4. The API Route for category
// app.post("/api/category", upload.single("image"), async (req, res) => {
//   try {
//     const newCategory = new Category({
//       name: req.body.name,
//       imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
//     });
//     await newCategory.save();
//     res.status(201).json({ message: "Saved successfully!", data: newCategory });
//   } catch (error) {
//     res.status(500).json({ message: "Database Error", error });
//   }
// });

// // the API Route for post

// app.post("/api/Posts", upload.single("image"), async (req, res) => {
//   try {
//     const newPost = new Post({
//       imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
//       name: req.body.name,
//       price: req.body.price,
//       status: req.body.status,
//     });
//     await newPost.save();
//     res.status(201).json({ message: "Saved successfully!", data: newPost });
//   } catch (error) {
//     res.status(500).json({ message: "Database Error", error });
//   }
// });


// // // 4. Your GET Route for customer
// app.get("/api/customers", async (req, res) => {
//   try {
//     const customers = await Customer.find();
//     console.log(customers);
//     res.json(customers);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // your GET route for category
// app.get("/api/category", async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.status(200).json(categories);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching categories" });
//   }
// });

// // GET Route for Posts

// app.get("/api/Posts", async (req , res) => {
//   try {
//     const post = await Post.find();
//     res.status(200).json(post);
//   }
//   catch(err){
//     res.status(500).json({message :"Error fetching Post"});
//   }
// });

// // app.put("/api/category/:id", async (req, res) => {
// //   try {
// //     // findByIdAndUpdate(id, data, options)
// //     const editCategory = await Category.findByIdAndUpdate(
// //       req.params.id, 
// //       req.body, 
// //       { new: true } 
// //     );

// //     if (!editCategory) {
// //       return res.status(404).json({ message: "Category not found" });
// //     }

// //     res.json(editCategory);
// //   } catch (error) {
// //     res.status(500).json({ message: "Server error", error });
// //   }
// // });

// app.put("/api/category/:id", upload.single("image"), async (req, res) => {
//   try {
//     // 1. Prepare the data to update
//     const updateData = {
//       name: req.body.name
//     };

//     // 2. If a new file was uploaded, add the new path to the update object
//     if (req.file) {
//       updateData.imageUrl = `/uploads/${req.file.filename}`;
//     }

//     // 3. Use { new: true } so Mongoose returns the UPDATED version
//     const updatedDoc = await Category.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true } 
//     );

//     if (!updatedDoc) return res.status(404).send("Category not found");

//     // 4. Send the NEW data back to React
//     res.json(updatedDoc);
    
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Delete Category Route
// app.delete("/api/category/:id", async (req, res) => {
//   const id = req.params.id; // Get the ID from the URL
//   const deleteCategory = await Category.findByIdAndDelete(id);
//   res.json(deleteCategory);
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));





//this is my mysql connection and API routes for customer, category and post tables. You can use this code as a reference to create your own server.js file. Make sure to install the required dependencies (express, mysql2, multer, cors) and set up your MySQL database with the appropriate tables (customers, categories, posts).

// const express = require("express");
// const multer = require("multer");
// const cors = require("cors");
// // const mysql = require("mysql2");

// const app = express();
// app.use(cors());
// app.use(express.json());

// // // MySQL Connection
// // const db = mysql.createConnection({
// //   host: process.env.DB_HOST,
// //   user: process.env.DB_USER,
// //   password: process.env.DB_PASSWORD,
// //   database: process.env.DB_NAME,
// //   port: process.env.DB_PORT || 3306, // Add port if needed
// // });


// // db.connect((err) => {
// //   if (err) {
// //     console.log("Database connection failed:", err);
// //   } else {
// //     console.log("Connected to MySQL");
// //   }
// // });


// // Multer for image upload
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// app.use("/uploads", express.static("uploads"));

// /* -------------------- CUSTOMERS -------------------- */

// // Add Customer
// app.post("/api/Customers", (req, res) => {
//   const { name, surname, email, mobile } = req.body;
//   const sql = "INSERT INTO customers (name, surname, email, mobile) VALUES (?, ?, ?, ?)";

//   db.query(sql, [name, surname, email, mobile], (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json({ message: "Customer added", id: result.insertId });
//   });
// });

// // Get Customers
// app.get("/api/Customers", (req, res) => {
//   db.query("SELECT * FROM customers", (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// });

// /* -------------------- CATEGORY -------------------- */

// // Add Category
// app.post("/api/Category", upload.single("image"), (req, res) => {
//   const name = req.body.name;
//   const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

//   const sql = "INSERT INTO categories (name, imageUrl) VALUES (?, ?)";
//   db.query(sql, [name, imageUrl], (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json({ message: "Category added", id: result.insertId });
//   });
// });

// // Get Category
// app.get("/api/Category", (req, res) => {
//   db.query("SELECT * FROM categories", (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// });

// // Update Category
// app.put("/api/Category/:id", upload.single("image"), (req, res) => {
//   const id = req.params.id;
//   const name = req.body.name;

//   if (req.file) {
//     const imageUrl = `/uploads/${req.file.filename}`;
//     const sql = "UPDATE categories SET name=?, imageUrl=? WHERE id=?";
//     db.query(sql, [name, imageUrl, id], (err, result) => {
//       if (err) return res.status(500).json(err);
//       res.json({ message: "Updated successfully" });
//     });
//   } else {
//     const sql = "UPDATE categories SET name=? WHERE id=?";
//     db.query(sql, [name, id], (err, result) => {
//       if (err) return res.status(500).json(err);
//       res.json({ message: "Updated successfully" });
//     });
//   }
// });

// // Delete Category
// app.delete("/api/Category/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM categories WHERE id=?", [id], (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json({ message: "Deleted successfully" });
//   });
// });

// /* -------------------- POSTS -------------------- */

// // Add Post
// app.post("/api/Posts", upload.single("image"), (req, res) => {
//   const { name, price, status } = req.body;
//   const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

//   const sql = "INSERT INTO posts (name, price, status, imageUrl) VALUES (?, ?, ?, ?)";
//   db.query(sql, [name, price, status, imageUrl], (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json({ message: "Post added", id: result.insertId });
//   });
// });

// // Get Posts
// app.get("/api/Posts", (req, res) => {
//   db.query("SELECT * FROM posts", (err, result) => {
//     if (err) return res.status(500).json(err);
//     res.json(result);
//   });
// });

// app.listen(5000, () => console.log("Server running on http://localhost:5000"));



const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json());

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

// --- NEW AUTO-SETUP SECTION ---
const createTables = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        surname VARCHAR(255),
        email VARCHAR(255),
        mobile VARCHAR(20)
    );

    CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        imageUrl TEXT
    );

    CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2),
        status VARCHAR(50),
        imageUrl TEXT
    );
  `;
  try {
    await db.query(query);
    console.log("Tables are ready!");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
};

// Test connection and run setup
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('Connected to Render PostgreSQL database.');
    createTables(); // This creates your tables automatically
  }
});
// --- END SETUP SECTION ---

module.exports = db;

// Multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));

/* -------------------- CUSTOMERS -------------------- */

// Add Customer
app.post("/api/Customers", (req, res) => {
  const { name, surname, email, mobile } = req.body;
  // Step 2: Use $n placeholders and RETURNING id
  const sql = "INSERT INTO customers (name, surname, email, mobile) VALUES ($1, $2, $3, $4) RETURNING id";

  db.query(sql, [name, surname, email, mobile], (err, result) => {
    if (err) return res.status(500).json(err);
    // Step 3: Access id via result.rows[0].id
    res.json({ message: "Customer added", id: result.rows[0].id });
  });
});

// Get Customers
app.get("/api/Customers", (req, res) => {
  db.query("SELECT * FROM customers", (err, result) => {
    if (err) return res.status(500).json(err);
    // Step 3: Send result.rows back to frontend
    res.json(result.rows);
  });
});

/* -------------------- CATEGORY -------------------- */

// Add Category
app.post("/api/Category", upload.single("image"), (req, res) => {
  const name = req.body.name;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

  const sql = "INSERT INTO categories (name, imageUrl) VALUES ($1, $2) RETURNING id";
  db.query(sql, [name, imageUrl], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Category added", id: result.rows[0].id });
  });
});

// Get Category
app.get("/api/Category", (req, res) => {
  db.query("SELECT * FROM categories", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result.rows);
  });
});

// Update Category
app.put("/api/Category/:id", upload.single("image"), (req, res) => {
  const id = req.params.id;
  const name = req.body.name;

  if (req.file) {
    const imageUrl = `/uploads/${req.file.filename}`;
    const sql = "UPDATE categories SET name=$1, imageUrl=$2 WHERE id=$3";
    db.query(sql, [name, imageUrl, id], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Updated successfully" });
    });
  } else {
    const sql = "UPDATE categories SET name=$1 WHERE id=$2";
    db.query(sql, [name, id], (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Updated successfully" });
    });
  }
});

// Delete Category
app.delete("/api/Category/:id", (req, res) => {
  const id = req.params.id;
  // Changed ? to $1
  db.query("DELETE FROM categories WHERE id=$1", [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Deleted successfully" });
  });
});

/* -------------------- POSTS -------------------- */

// Add Post
app.post("/api/Posts", upload.single("image"), (req, res) => {
  const { name, price, status } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : "";

  const sql = "INSERT INTO posts (name, price, status, imageUrl) VALUES ($1, $2, $3, $4) RETURNING id";
  db.query(sql, [name, price, status, imageUrl], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Post added", id: result.rows[0].id });
  });
});

// Get Posts
app.get("/api/Posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result.rows);
  });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));