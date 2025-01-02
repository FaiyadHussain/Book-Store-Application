const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
require("./Connection/Connection");
const router = require("./Routes/user");
const routers = require("./Routes/Book");
const routes = require("./Routes/Favourites");
const cart = require("./Routes/Cart");
const orders = require("./Routes/order");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true, // Allow cookies and other credentials
};

// Apply CORS middleware
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/", router);
app.use("/book", routers);
app.use("/favourites", routes);
app.use("/Cart", cart);
app.use("/order", orders);

app.listen(process.env.PORT, () => {
  console.log(`Server is Connected PORT : ${process.env.PORT}`);
});
