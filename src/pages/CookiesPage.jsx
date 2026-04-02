
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const CookiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Glowverse Skincare</title>
        <meta name="description" content="Cookie Policy for Glowverse Skincare." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <div className="bg-muted/30 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-foreground font-medium">Cookie Policy</span>
            </div>
          </div>

          <article className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: April 2, 2026</p>

            <h2>1. What Are Cookies</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site.</p>

            <h2>3. The Cookies We Set</h2>
            <ul>
              <li><strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it.</li>
              <li><strong>Analytics cookies:</strong> We use analytics packages to help us understand how you use the site and ways that we can improve your experience.</li>
            </ul>

            <h2>4. Disabling Cookies</h2>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit.</p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CookiesPage;
