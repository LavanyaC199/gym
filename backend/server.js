// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();
// const connectDB = require("./config/db");
// const app = express();

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/auth", require("./routes/authRoutes"));
// app.use("/admin", require("./routes/adminRoutes"));
// app.use("/trainer", require("./routes/trainerRoutes"));
// app.use("/user", require("./routes/userRoutes"));

// // MongoDB
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.error(err));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () =>
//   console.log(`✅ Server running on port ${PORT}`)
// );


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());

// 🔴 TEST ROUTE
app.get("/__test", (req, res) => {
  res.send("SERVER IS ALIVE");
});

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/admin", require("./routes/adminRoutes"));
app.use("/trainer", require("./routes/trainerRoutes"));
app.use("/user", require("./routes/userRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
