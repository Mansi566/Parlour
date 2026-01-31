// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// import mongoose from "mongoose";
// import cors from "cors";
// import multer from "multer";
// import Category from "./model/Category.js";
// import Customer from "./model/customer.js";
// import Post  from "./model/post.js";
// import dotenv from "dotenv";
// dotenv.config();  
// // Load environment variables from .env file
// // dotenv.config();
// // const PORT = process.env.PORT || 5000;
// // const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/my_database";

// const app = express();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);


// app.use(cors()); // This allows your React app to talk to the server
// app.use(express.json());

// // 1. Connect to Local MongoDB
// mongoose
//   .connect(process.env.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));


// // serve frontend
// app.use(express.static(path.join(__dirname, "../client/dist")));


// // SPA fallback LAST (no path string)
// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

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

// app.get("/api/Posts", async (req, res) => {
//   try {
//     const post = await Post.find();
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching Post" });
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
//       name: req.body.name,
//     };

//     // 2. If a new file was uploaded, add the new path to the update object
//     if (req.file) {
//       updateData.imageUrl = `/uploads/${req.file.filename}`;
//     }

//     // 3. Use { new: true } so Mongoose returns the UPDATED version
//     const updatedDoc = await Category.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true },
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

// // app.listen(5000, () => console.log("Server running on http://localhost:5000"));
// // app.get("/", (req, res) => {
// //   res.send("Server is live!");
// //   res.sendFile(path.join(__dirname, "..", "index.html"));

// // });

// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });


// // API example
// // app.get("/api/test", (req, res) => {
// //   return res.json({ message: "API working" });
// // });

// // Example API route
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });


// // Catch-all route for React
// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname, '../client/dist', 'index.html'));
// });

// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => {
//   console.log("Server running on port", PORT);
// });



import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";

import Category from "./model/Category.js";
import Customer from "./model/customer.js";
import Post from "./model/post.js";

dotenv.config();

const app = express();

// fix __dirname (ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------ MIDDLEWARE ------------------
app.use(cors());
app.use(express.json());

// ------------------ DATABASE ------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB error:", err));

// ------------------ FILE UPLOAD SETUP ------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));

// ------------------ API ROUTES ------------------

// Customers
app.post("/api/customers", async (req, res) => {
  try {
    const savedCustomer = await new Customer(req.body).save();
    res.status(201).json(savedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get("/api/customers", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Category
app.post("/api/category", upload.single("image"), async (req, res) => {
  const category = new Category({
    name: req.body.name,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
  });
  await category.save();
  res.status(201).json(category);
});

app.get("/api/category", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

app.put("/api/category/:id", upload.single("image"), async (req, res) => {
  const updateData = { name: req.body.name };
  if (req.file) updateData.imageUrl = `/uploads/${req.file.filename}`;

  const updated = await Category.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  );

  if (!updated) return res.status(404).send("Category not found");
  res.json(updated);
});

app.delete("/api/category/:id", async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

// Posts
app.post("/api/Posts", upload.single("image"), async (req, res) => {
  const post = new Post({
    name: req.body.name,
    price: req.body.price,
    status: req.body.status,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
  });
  await post.save();
  res.status(201).json(post);
});

app.get("/api/Posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Test API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// ------------------ FRONTEND ------------------

// Serve React build
app.use(express.static(path.join(__dirname, "../client/dist")));

// ✅ SPA fallback (LAST — no path string, Node 22 safe)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// ------------------ START SERVER ------------------
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});