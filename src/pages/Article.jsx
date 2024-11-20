import React from "react";
import DataArticle from "../data/DataArticles";
import Articles from "../components/molecules/Articles";
import head from "../assets/3R/head.jpg"

const Article = () => {
  const article = DataArticle;
  return (
    <div className="pt-16">
      <div
        className="w-full md:min-h-[50vh] min-h-[55vh] lg:min-h-[68vh] xl:min-h-[59vh] bg-cover bg-center text-black bg-blend-multiply bg-black/55 flex justify-center items-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1585241936939-be4099591252?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      >
        <div className="text-white text-left p-12 max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">
          <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mt-0">
            Article
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 place-items-center">
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
