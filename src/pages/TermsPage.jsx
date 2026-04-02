
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Glowverse Skincare</title>
        <meta name="description" content="Terms of Service for Glowverse Skincare." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <div className="bg-muted/30 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-foreground font-medium">Terms of Service</span>
            </div>
          </div>

          <article className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: April 2, 2026</p>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Glowverse Skincare, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>

            <h2>2. Medical Disclaimer</h2>
            <p>The content on Glowverse Skincare is for informational and educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare provider or dermatologist regarding any medical condition or treatment.</p>

            <h2>3. Intellectual Property</h2>
            <p>All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Glowverse Skincare or its content suppliers and protected by international copyright laws.</p>

            <h2>4. User Conduct</h2>
            <p>You agree to use the site only for lawful purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others or otherwise cause damage to the site or the Content.</p>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
