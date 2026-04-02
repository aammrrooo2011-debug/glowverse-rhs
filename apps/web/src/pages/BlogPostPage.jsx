
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AuthorCard from '@/components/AuthorCard.jsx';
import RelatedPostsWidget from '@/components/RelatedPostsWidget.jsx';
import { samplePosts } from '@/data/samplePosts.js';

const BlogPostPage = () => {
  const { postId } = useParams();
  const post = samplePosts.find(p => p.id === parseInt(postId));

  if (!post) {
    return <Navigate to="/" replace />;
  }

  const formattedDate = new Date(post.publishDate).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <>
      <Helmet>
        <title>{`${post.title} - Glowverse Skincare`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-muted/30 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
              <Link to="/" className="hover:text-foreground transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
              <span className="text-foreground font-medium truncate">{post.title}</span>
            </div>
          </div>

          <article className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Main Content */}
                <div className="lg:col-span-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary-foreground transition-colors mb-8">
                      <ArrowLeft className="w-4 h-4" /> Back to articles
                    </Link>

                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase bg-primary/20 text-primary-foreground rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-balance">
                      {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 mb-10 text-sm text-muted-foreground border-y border-border py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-foreground">{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.publishDate}>{formattedDate}</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>

                    <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-lg">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-16 pt-8 border-t border-border">
                      <AuthorCard author={post.author} />
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                  <div className="sticky top-28">
                    <RelatedPostsWidget posts={samplePosts} currentPostId={post.id} />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPostPage;
