"use client"
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe (you'll need to replace with your publishable key)
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_key_here');

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  stripePriceId: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Light",
    price: "$50",
    period: "/mo",
    description: "A great option to test out the platform!",
    features: [
      "1 Strategy Call",
      "Basic AI Assessment",
      "Email Support",
      "Resource Library Access"
    ],
    stripePriceId: "price_light_monthly"
  },
  {
    name: "Pro",
    price: "$75",
    period: "/mo",
    description: "Unlimited calls with hundreds of AI experts.",
    features: [
      "Unlimited Strategy Calls",
      "Full AI Implementation Support",
      "Priority Support",
      "Custom AI Workflows",
      "Team Training Sessions",
      "Progress Tracking Dashboard"
    ],
    popular: true,
    stripePriceId: "price_pro_monthly"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Everything you need for large teams.",
    features: [
      "Everything in Pro",
      "Dedicated AI Consultant",
      "Custom AI Solutions",
      "On-site Training",
      "SLA Guarantee",
      "Quarterly Strategy Reviews"
    ],
    stripePriceId: "price_enterprise"
  }
];

const Pricing = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (priceId: string, tierName: string) => {
    setLoading(priceId);
    
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // Create checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          tierName: tierName,
        }),
      });

      const session = await response.json();

      if (session.error) {
        throw new Error(session.error);
      }

      // Redirect to Stripe checkout
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div id="pricing-section" className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-tertiary relative overflow-hidden'>
      <div className='text-center mb-16'>
        <h2 className='text-primary text-sm font-semibold tracking-widest uppercase mb-4 font-data'>PRICING</h2>
        <h3 className='text-4xl lg:text-5xl font-bold text-primary mb-6 font-headline'>Choose your plan</h3>
        <p className='text-xl text-grey max-w-3xl mx-auto font-body'>Start with a strategy call or go all-in with our comprehensive AI implementation program.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {pricingTiers.map((tier, index) => (
          <div 
            key={index} 
            className={`relative bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
              tier.popular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h5 className="text-2xl font-bold text-darkpurple mb-2">{tier.name}</h5>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-4xl font-bold text-darkpurple">{tier.price}</span>
                <span className="text-grey ml-1">{tier.period}</span>
              </div>
              <p className="text-grey">{tier.description}</p>
            </div>

            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-grey">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleCheckout(tier.stripePriceId, tier.name)}
              disabled={loading === tier.stripePriceId}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                tier.popular
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white'
              } ${loading === tier.stripePriceId ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading === tier.stripePriceId ? 'Processing...' : tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-grey mb-4">All plans include a 30-day money-back guarantee</p>
        <p className="text-sm text-grey">Need a custom plan? <a href="#contact" className="text-primary hover:underline">Contact us</a></p>
      </div>
    </div>
  );
};

export default Pricing;
