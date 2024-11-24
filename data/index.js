import fs from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "AllPLU.json")

const getAll = async () => {
  const data = await fs.readFile(dataPath, "utf-8");
  return JSON.parse(data);
}

const getByArticle = async (article) => {
  const data = await getAll();
  const result  = data.find(item => item.article === article);
  return result;
}

const getByName = async (name) => {
  const data = await getAll();
  const result  = data.find(item => item.name === name);
  return result;
}

const getByPLU = async (PLU) => {
  const data = await getAll();
  const result  = data.find(item => item.PLU === PLU);
  return result;
}

export default {
  getAll,
  getByArticle,
  getByName,
  getByPLU,
};