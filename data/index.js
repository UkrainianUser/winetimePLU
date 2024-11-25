import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "AllPLU.json");
let cachedData = null;

// Читання файлу
const loadData = async () => {
  if (!cachedData) {
    const data = await fs.readFile(dataPath, "utf-8");
    cachedData = JSON.parse(data);
  }
  return cachedData;
};

// Отримати всі дані
const getAll = async () => {
  return await loadData();
};

// Знайти за артикулом
const getByArticle = async (article) => {
  const data = await loadData();
  return data.find((item) => item.article === article) || null;
};

// Знайти за назвою
const getByName = async (name) => {
  const data = await loadData();
  return data.find((item) => item.name === name) || null;
};

// Знайти за PLU
const getByPLU = async (PLU) => {
  const data = await loadData();
  return data.find((item) => item.PLU === PLU) || null;
};

const clearCache = () => {
  cachedData = null;
};

export default {
  getAll,
  getByArticle,
  getByName,
  getByPLU,
  clearCache,
};
