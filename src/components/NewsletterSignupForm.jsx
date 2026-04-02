
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { Loader2, Send } from 'lucide-react';
import pb from '@/lib/pocketbaseClient.js';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
});

const NewsletterSignupForm = ({ className = '' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await pb.collection('newsletter_subscribers').create(data, { $autoCancel: false });
      toast.success('Successfully subscribed!', {
        description: 'Welcome to the Glowverse community.',
      });
      reset();
    } catch (error) {
      console.error('Newsletter error:', error);
      toast.error('Subscription failed', {
        description: 'Please try again later or use a different email.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-card p-8 rounded-2xl shadow-lg border border-border/50 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="font-serif text-2xl font-semibold mb-2">Join the Glowverse</h3>
        <p className="text-muted-foreground">Get weekly skincare tips, exclusive guides, and early access to reviews.</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
            {...register('name')}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1 ml-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email Address"
            className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
            {...register('email')}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1 ml-1">{errors.email.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-6 rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Subscribe <Send className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
      <p className="text-xs text-center text-muted-foreground mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignupForm;
