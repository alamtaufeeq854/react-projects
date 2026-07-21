import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://content.guardianapis.com/search?q=${category}&show-fields=thumbnail&page-size=10&api-key=${import.meta.env.VITE_GUARDIAN_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setArticles(data.response.results || []);
      });
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {articles.map((news, index) => (
        <NewsItem
          key={index}
          title={news.webTitle}
          description={news.sectionName}
          src={news.fields?.thumbnail}
          url={news.webUrl}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
