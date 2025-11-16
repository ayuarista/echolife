import React from 'react'
import { Link } from "react-router-dom";
import Articles from "../../components/molecules/ArticleCard";
import DataArticle from "../../data/DataArticle";

const SectionArticle = () => {
  const article = DataArticle;

  return (
    <div className="mt-16 mx-8 lg:mx-12">
    <div className="flex items-center justify-between gap-6" data-aos="fade-down" data-aos-duration="1000">
      <div>
        <p className="text-hero tracking-widest text-sm dark:text-white">
          ARTICLES
        </p>
        <h1 className="text-3xl font-bold text-secondary mt-1 dark:text-hero">
          Latest Article
        </h1>
      </div>
      <Link to="/article">
        <button className="px-6 py-3 lg:px-7 lg:py-3 border border-primary dark:border-hero dark:hover:text-black transition-all duration-300 dark:text-white dark:hover:bg-hero hover:bg-primary hover:text-white text-black rounded-full font-medium text-[14px] ml-auto mt-4 mr-4 whitespace-nowrap">
          Read More
        </button>
      </Link>
    </div>
    <p className="mt-1 font-Poppins text-sm text-gray-500 dark:text-gray-200 max-w-[35rem] text-justify leading-relaxed">
      If we choose to ignore the importance of reducing, reusing, and
      recycling, the environmental consequences will be severe and
      long-lasting. Landfills will overflow with waste, leading to
      increased pollution in our air, soil, and water.
    </p>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10 place-items-center" data-aos="fade-up" data-aos-duration="1000">
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
  )
}

export default SectionArticle