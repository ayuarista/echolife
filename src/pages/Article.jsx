import React from "react";
import DataArticle from "../data/DataArticles";
import Articles from "../components/molecules/ArticleCard";

const Article = () => {
  const article = DataArticle;
  return (
    <div className="pt-16">
      <div className="mt-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 mx-auto">
        {article.map((DataArticle, index) => (
          <Articles
            key={index}
            image={DataArticle.image}
            title={DataArticle.title}
            penulis={DataArticle.penulis}
            link={DataArticle.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Article;
