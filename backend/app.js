const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const authRouter = require("./routes/api/auth");
const profileRouter = require("./routes/api/profile");
const newsletterRouter = require("./routes/api/newsletter");
const booksRouter = require("./routes/api/books");
const categoriesRouter = require("./routes/api/categories");
const ordersRouter = require("./routes/api/orders");
const novaPoshtaRouter = require("./routes/api/novaposhta");
const cartRouter = require("./routes/api/cart");
const adminRouter = require("./routes/api/admin");
const paymentRouter = require("./routes/api/payment");
const feedbackRouter = require("./routes/api/feedback");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/profile", profileRouter);
app.use("/api/newsletter", newsletterRouter);
app.use("/api/books", booksRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/novaposhta", novaPoshtaRouter);

app.use("/api/cart", cartRouter);
app.use("/api/admin", adminRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/feedback", feedbackRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
