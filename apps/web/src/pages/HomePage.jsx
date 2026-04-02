
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import PostCard from '@/components/PostCard.jsx';
import NewsletterSignupForm from '@/components/NewsletterSignupForm.jsx';
import CategoryFilter from '@/components/CategoryFilter.jsx';
import ScrollSequence from '@/components/ScrollSequence.jsx';
import { samplePosts } from '@/data/samplePosts.js';

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Glowverse Skincare | Radiant Healthy Skin Protocol</title>
        <meta
          name="description"
          content="Science-backed skincare rituals for long-term skin health. Join the protocol for radiant, healthy skin."
        />
        <meta property="og:title" content="Glowverse Skincare - Radiant Healthy Skin" />
        <meta property="og:description" content="Discover science-backed skincare rituals and the Skin Longevity Protocol." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1556228578-0d85b1a4d571" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* 3D Scroll Hero Section (SKILL.md) */}
          <section className="relative">
            <ScrollSequence 
              frameCount={60} 
              folderPath="/assets/3d-hero" 
              containerHeight="400vh"
            />
            
            <div className="absolute top-0 left-0 w-full h-screen flex items-center z-10 pointer-events-none">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="max-w-2xl"
                >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs uppercase tracking-widest font-semibold mb-6">
                    Skin Longevity Protocol
                  </span>
                  <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 text-balance text-foreground">
                    Radiant Healthy <span className="italic">Skin.</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-lg">
                    A premium system for long-term skin health. Evidence-based rituals for the modern skin minimalists.
                  </p>
                  <div className="flex gap-4 pointer-events-auto">
                    <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 active:scale-95 transition-all">
                      Join the Protocol
                    </button>
                    <button className="px-8 py-4 border border-border text-foreground rounded-full font-bold hover:bg-muted transition-all">
                      Browse Research
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Hint (Bottom) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-40">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-foreground">Scroll to Deconstruct</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
              </div>
            </div>
          </section>

          {/* Annotation Cards Section (Mockup / Integrated) */}
          <section className="relative z-10 py-32 bg-background/80 backdrop-blur-3xl border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { label: "Barrier Health", value: "+30%", desc: "Immediate ceramic support" },
                  { label: "Longevity", value: "24h", desc: "Sustained cellular repair" },
                  { label: "Active Clarity", value: "85%", desc: "Science-backed efficacy" },
                  { label: "Minimalist", value: "3 Steps", desc: "Simplified daily systems" }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all shadow-sm hover:shadow-xl group"
                  >
                    <div className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-2 group-hover:scale-110 transition-transform">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
                      {stat.label}
                    </div>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">
                      {stat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">The Latest Protocols</h2>
                  <p className="text-xl text-muted-foreground">Expert clinical guides for your skin journey.</p>
                </div>
                <CategoryFilter 
                  activeCategory={activeCategory} 
                  onCategoryChange={setActiveCategory} 
                />
              </div>

              <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <PostCard post={post} index={index} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 z-0" />
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#000 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
              <h2 className="font-serif text-5xl md:text-7xl font-bold mb-8">Join the Protocol.</h2>
              <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
                Unlock exclusive science-backed content and skin longevity insights delivered weekly to your inbox.
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterSignupForm className="bg-card shadow-2xl p-2 rounded-full flex gap-2 border border-border" />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
