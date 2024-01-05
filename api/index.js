const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");

const { notFoundMiddleware, errorHandlerMiddleware } = require("./utils/middlewares");
const { landingRouter } = require("./routes/router");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });


// Cors middleware
app.use(cors());

// Express middlewares
app.use((req, res, next) => {
  express.json()(req, res, next);
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "10000kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());
app.set('trust proxy', 'loopback') // specify a single subnet

// Limit requests from same IP
const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!"
});
app.use(limiter);

// App routers
app.use('/api', landingRouter);

// Error handling middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
