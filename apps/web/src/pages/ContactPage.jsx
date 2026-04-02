
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Message sent successfully!', {
      description: "We'll get back to you within 48 hours."
    });
    reset();
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Glowverse Skincare</title>
        <meta name="description" content="Get in touch with the Glowverse Skincare team for questions, partnerships, or feedback." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <div className="bg-muted/30 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-foreground font-medium">Contact</span>
            </div>
          </div>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Contact Info */}
                <div>
                  <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
                  <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                    Have a question about a routine? Want to partner with us? Or just want to say hello? We'd love to hear from you.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-foreground shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold mb-1">Email Us</h3>
                        <p className="text-muted-foreground mb-1">For general inquiries & partnerships:</p>
                        <a href="mailto:hello@glowverse.com" className="text-primary-foreground font-medium hover:underline">hello@glowverse.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-foreground shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold mb-1">Office</h3>
                        <p className="text-muted-foreground">
                          123 Skincare Avenue<br />
                          Suite 400<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                  <h2 className="font-serif text-2xl font-semibold mb-6">Send a Message</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                          {...register('name')}
                          disabled={isSubmitting}
                        />
                        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                          {...register('email')}
                          disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        {...register('subject')}
                        disabled={isSubmitting}
                      />
                      {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                        {...register('message')}
                        disabled={isSubmitting}
                      />
                      {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] disabled:opacity-70"
                    >
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Message'}
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
