import { Link } from "@remix-run/react";
 
const ArticleTeaser = ({ article }) => {
  return (
    <div className="column feature">
      <div className="p-6">
        {article.image && (
          <img
            className="object-center mb-8 rounded-xl mx-auto"
            src={`${article.image.filename}/m/360x240`}
            alt={article.image.alt}
          />
        )}
        <h2 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
          {article.title}
        </h2>
        <div className="mx-auto text-base leading-relaxed text-gray-500 line-clamp-2">
          {article.teaser}
        </div>
        <div className="mt-4">
          <Link
            to={`/blog/${article.slug}`}
            prefetch="intent"
            className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
          >
            Read More »
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ArticleTeaser;