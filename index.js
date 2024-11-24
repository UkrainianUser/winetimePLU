console.log("Hello! It is working!");

import pluList from "./data/index.js";

const invokeAction = async ({ action, article, name, PLU }) => {
  switch (action) {
    case "read":
      const allPlu = await pluList.getAll();
      return console.log(allPlu);
    case "getByArticle":
      const oneArticle = await pluList.getByArticle(article);
      return console.log(oneArticle) || null;
    case "getByName":
      const oneName = await pluList.getByName(name);
      return console.log(oneName) || null;
    case "getByPLU":
      const onePLU = await pluList.getByPLU(PLU);
      return console.log(onePLU) || null;
  }
};

// invokeAction({action: "read"});
// invokeAction({ action: "getByArticle", article: 8000017725840 });
// invokeAction({action: "getByName", name: "Абрикос WT"});
// invokeAction({action: "getByPLU", PLU: 2292});




// import mongoose from "mongoose";
// import dotenv from "dotenv";

// dotenv.config();

// const { DB_HOST } = process.env;

// mongoose.set("strictQuery", true);

// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("Database connected successfully!"))
//   .catch((error) => {
//     console.error("Database connection error:", error);
//     console.error("Error details:", error.message);
//   });
