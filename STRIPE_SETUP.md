# Stripe Payment Integration Setup

This guide will help you set up Stripe payments for The Prism Lab website.

## 1. Create a Stripe Account

1. Go to [stripe.com](https://stripe.com) and create an account
2. Complete the account verification process
3. Switch to test mode for development

## 2. Get Your API Keys

1. Go to your [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)

## 3. Set Up Environment Variables

Create a `.env.local` file in your project root with the following:

```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
```

## 4. Configure Products in Stripe Dashboard

### Option A: Use Dynamic Pricing (Recommended)
The current setup uses dynamic pricing, so you don't need to create products in Stripe Dashboard.

### Option B: Create Products in Stripe Dashboard
If you prefer to create products in Stripe Dashboard:

1. Go to [Products](https://dashboard.stripe.com/products) in your Stripe Dashboard
2. Create three products:
   - **Light Plan** - $50/month
   - **Pro Plan** - $75/month  
   - **Enterprise Plan** - Custom pricing

3. Update the `stripePriceId` values in `app/components/Pricing/index.tsx`:
   ```typescript
   stripePriceId: "price_1ABC123..." // Use the actual price IDs from Stripe
   ```

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Go to the pricing section on your website
3. Click "Get Started" on any plan
4. Use Stripe's test card numbers:
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - **Expiry**: Any future date
   - **CVC**: Any 3 digits

## 6. Production Setup

When ready for production:

1. Switch to live mode in your Stripe Dashboard
2. Update your environment variables with live keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_key
   STRIPE_SECRET_KEY=sk_live_your_live_key
   ```

## 7. Webhook Setup (Optional)

For advanced features like subscription management:

1. Go to [Webhooks](https://dashboard.stripe.com/webhooks) in Stripe Dashboard
2. Add endpoint: `https://yourdomain.com/api/webhooks`
3. Select events: `checkout.session.completed`, `customer.subscription.created`
4. Copy the webhook secret and add to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
   ```

## 8. Customization

### Update Pricing
Edit the `pricingTiers` array in `app/components/Pricing/index.tsx` to change:
- Plan names and descriptions
- Prices and features
- Stripe price IDs

### Update Success Page
Modify `app/success/page.tsx` to customize the post-payment experience.

### Add More Payment Methods
Update the `payment_method_types` array in `app/api/create-checkout-session/route.ts`:
```typescript
payment_method_types: ['card', 'sepa_debit', 'ideal'],
```

## 9. Security Notes

- Never commit your `.env.local` file to version control
- Keep your secret key secure and never expose it in client-side code
- Use test keys for development and live keys only for production
- Regularly rotate your API keys

## 10. Support

For Stripe-specific issues:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)

For implementation issues:
- Check the browser console for errors
- Verify your environment variables are loaded correctly
- Ensure your Stripe account is properly configured




