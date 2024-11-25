import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => {
    console.error("Database connection error:", error);
    console.error("Error details:", error.message);
  });






















// import express from "express";
// import pluList from "./data/index.js"; // Файл із методами роботи з даними

// const app = express();
// const PORT = 3000;

// // Middleware для роботи з JSON
// app.use(express.json());

// // Маршрут для обробки запитів
// app.post("/api", async (req, res) => {
//   const { action, article, name, PLU } = req.body;

//   try {
//     switch (action) {
//       case "getByArticle":
//         return res.json(await pluList.getByArticle(article));
//       case "getByName":
//         return res.json(await pluList.getByName(name));
//       case "getByPLU":
//         return res.json(await pluList.getByPLU(PLU));
//       case "read":
//       default:
//         return res.json(await pluList.getAll());
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Сталася помилка на сервері", error });
//   }
// });

// // Запуск сервера
// app.listen(PORT, () => {
//   console.log(`Сервер запущено на http://localhost:${PORT}`);
// });
