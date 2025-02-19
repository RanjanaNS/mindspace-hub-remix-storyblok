import { useLoaderData } from "@remix-run/react";
import ArticleTeaser from "./ArticleTeaser";
import { storyblokEditable } from "@storyblok/react";
 
const AllArticles = ({ blok }) => {
  const { articles } = useLoaderData();
 
  return (
    <>
      <p className="text-5xl font-semibold pt-12">{blok.headline}</p>
      <div
        className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-4   lg:px-24 md:px-16"
        {...storyblokEditable(blok)}
      >
        {articles?.length &&
          articles.map((article) => {
            article.content.slug = article.slug;
            return (
              <ArticleTeaser article={article.content} key={article.uuid} />
            );
          })}
      </div>
    </>
  );
};
export default AllArticles;