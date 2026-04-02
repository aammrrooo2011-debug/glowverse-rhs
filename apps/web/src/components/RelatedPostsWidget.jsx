
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RelatedPostsWidget = ({ posts, currentPostId }) => {
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 4);

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
      <div className="space-y-4">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="group block"
          >
            <div className="flex gap-3">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm leading-snug mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {post.readingTime} min read
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all mt-6"
      >
        View all articles
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default RelatedPostsWidget;
