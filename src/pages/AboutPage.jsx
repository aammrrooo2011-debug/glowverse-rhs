
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Shield, Sparkles } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import NewsletterSignupForm from '@/components/NewsletterSignupForm.jsx';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Glowverse Skincare</title>
        <meta name="description" content="Learn about Glowverse Skincare's mission to provide honest, science-backed skincare advice." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-muted/30 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-foreground font-medium">About Us</span>
            </div>
          </div>

          {/* Hero Section */}
          <section className="py-20 lg:py-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Demystifying skincare, <span className="text-primary-foreground italic">one ingredient at a time.</span>
                  </h1>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    Glowverse was born from a simple frustration: the skincare industry is overwhelming. We're here to cut through the marketing noise and provide science-backed, honest advice that helps you build a routine that actually works.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1664958884838-705b1518406f" 
                      alt="Glowverse team working on skincare formulations" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-xs hidden md:block">
                    <p className="font-serif text-xl font-semibold mb-2">"Skincare is self-care."</p>
                    <p className="text-sm text-muted-foreground">— The Glowverse Team</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-secondary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                <p className="text-muted-foreground">Everything we write, review, and recommend is guided by these three principles.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary-foreground">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Science First</h3>
                  <p className="text-muted-foreground leading-relaxed">We rely on clinical studies and dermatological consensus, not trends or viral TikToks.</p>
                </div>
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary-foreground">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Honest Reviews</h3>
                  <p className="text-muted-foreground leading-relaxed">If a product doesn't work, we'll tell you. We never let sponsorships dictate our opinions.</p>
                </div>
                <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary-foreground">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">Accessible Luxury</h3>
                  <p className="text-muted-foreground leading-relaxed">Great skincare shouldn't be exclusive. We find the best formulations at every price point.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <NewsletterSignupForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
