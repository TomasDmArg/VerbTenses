import { articles } from "../../../constants/articles";
export default function handler(req, res) {
  let article = req.query.id;
  article = article.toLowerCase();
  const articleData = (article == "all") ? articles : articles[article];
  res.status(200).json(articleData);
}
