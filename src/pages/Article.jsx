import React, { useEffect } from "react";
import DataArticle from "../data/DataArticles";
import Articles from "../components/molecules/ArticleCard";
import BacktoTop from "../components/atoms/BacktoTop";
import AOS from "aos";
import "aos/dist/aos.css";

const Article = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });
  }, []);

  const article = DataArticle;
  return (
    <div className="pt-16">
      <div className="mt-8 max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5 mx-auto">
        {article.map((DataArticle, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 50}>
            <Articles
              image={DataArticle.image}
              title={DataArticle.title}
              penulis={DataArticle.penulis}
              link={DataArticle.link}
            />
          </div>
        ))}
      </div>
      <BacktoTop />
    </div>
  );
};

export default Article;
