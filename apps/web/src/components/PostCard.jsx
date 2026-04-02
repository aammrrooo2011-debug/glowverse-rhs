
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const PostCard = ({ post, index = 0 }) => {
  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col h-full bg-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      <Link to={`/blog/${post.id}`} className="block relative overflow-hidden">
        <div className="aspect-[16/11] overflow-hidden bg-muted">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-4 left-4">
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase bg-background/90 backdrop-blur-md text-foreground rounded-full border border-border/20">
            {post.category}
          </span>
        </div>
      </Link>
      
      <div className="flex flex-col flex-1 p-8">
        <div className="flex items-center gap-4 mb-4 text-[11px] font-medium tracking-tight text-muted-foreground uppercase">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime} min read</span>
          </div>
          <span className="opacity-20">•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            <time dateTime={post.publishDate}>{formattedDate}</time>
          </div>
        </div>

        <Link to={`/blog/${post.id}`}>
          <h3 className="font-serif text-3xl font-bold leading-[1.1] mb-4 text-balance group-hover:text-primary-foreground transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground leading-relaxed mb-8 flex-1 text-sm line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 pt-6 mt-auto">
          <div className="relative">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-background ring-1 ring-border"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-xs tracking-wide uppercase">{post.author.name}</p>
            <p className="text-[10px] text-muted-foreground">Lead Researcher</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
            <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default PostCard;
