import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
// ROUTE IMPORTS
import dashboardRoutes from "./routes/dashboardRoutes";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

// CONFIGS

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTEs

app.use("/dashboard", dashboardRoutes); //http://localhost:8000/dashboard
app.use("/products", productRoutes); //http://localhost:8000/products
app.use("/users", userRoutes); //http://localhost:8000/users

// SERVER

const port = process.env.port || 3001;
app.listen(port);
console.log(`Server is LIVE and running on Port: ${port}`);
