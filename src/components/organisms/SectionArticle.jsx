import React from "react";
import { Link } from "react-router-dom";
import Articles from "../../components/molecules/ArticleCard";
import DataArticle from "../../data/DataArticle";

const SectionArticle = () => {
  const article = DataArticle;

  return (
    <div className="mt-16 mx-8 lg:mx-12">
      <div>
        <div
          className="flex items-center justify-between gap-6"
          data-aos="fade-down" data-aos-delay="0" data-aos-duration="800"
        >
          <div>
            <p className="text-hero tracking-widest text-sm dark:text-white">
              ARTICLES
            </p>
            <h1 className="text-3xl font-bold text-secondary mt-1 dark:text-primary"> 
              
            Latest{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-hero">
                Articles
              </span>
            </h1>
          </div>
         
        </div>
        <p
          className="mt-1 font-Poppins text-sm text-gray-500 dark:text-gray-200 max-w-[35rem] text-justify leading-relaxed"
          data-aos="fade-up" data-aos-delay="100" data-aos-duration="800"
        >
          If we choose to ignore the importance of reducing, reusing, and
          recycling, the environmental consequences will be severe and
          long-lasting. Landfills will overflow with waste, leading to increased
          pollution in our air, soil, and water.
        </p>
         <Link to="/article" >
            <button className="group px-5 py-2.5 mt-6 bg-primary hover:bg-primary/60 dark:bg-hero dark:hover:bg-hero/60 text-white dark:text-base-300 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl">
              Read More
            </button>
          </Link>
      </div>
      <div
        className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 place-items-center"
      >
        {article.map((DataArticle, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
            data-aos-duration="700"
            style={{ width: '100%' }}
          >
            <Articles
              image={DataArticle.image}
              title={DataArticle.title}
              penulis={DataArticle.penulis}
              link={DataArticle.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionArticle;
