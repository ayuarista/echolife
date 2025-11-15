import React from "react";
import DataArticle from "../data/DataArticles";
import Articles from "../components/molecules/ArticleCard";
import BacktoTop from "../components/atoms/BacktoTop";

const Article = () => {
  const article = DataArticle;
  return (
    <div className="pt-12">
      <div className="mt-8 mx-8 md:mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5">
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
      <BacktoTop/> 
    </div>
  );
};

export default Article;
